import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppointmentService } from '../../core/services/appointment.service';
import { Appointment } from '../../core/models/appointment.model';

interface TherapyOption {
  id: number;
  name: string;
  description: string;
  duration: string;
}

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  therapies: TherapyOption[] = [
    {
      id: 1,
      name: 'Conoterapia',
      description: 'Sesión de relajación y equilibrio energético.',
      duration: '50 - 60 minutos'
    },
    {
      id: 2,
      name: 'Alineación de Chakras',
      description: 'Trabajo energético para recuperar armonía y equilibrio.',
      duration: '60 minutos'
    },
    {
      id: 3,
      name: 'Masajes terapéuticos',
      description: 'Espacio de acompañamiento y sanación integral.',
      duration: '60 minutos'
    }
  ];

  selectedTherapy: TherapyOption | null = null;
  
  // Control de Modales separados
  isCalendarModalOpen: boolean = false;
  isDataModalOpen: boolean = false;

  availableTimes: string[] = [];
  selectedTime: string | null = null;

  clientName: string = '';
  clientPhone: string = '';
  clientEmail: string = '';
  clientMessage: string = '';

  currentMonth: Date = new Date();
  calendarDays: (string | null)[] = [];
  selectedDate: string | null = null;

  readonly monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  readonly weekDays: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  constructor(private appointmentService: AppointmentService) {
    this.generateCalendar();
  }

  openCalendarModal(therapy: TherapyOption): void {
    this.selectedTherapy = therapy;
    this.selectedDate = null;
    this.selectedTime = null;
    this.availableTimes = [];
    this.currentMonth = new Date();
    this.generateCalendar();
    this.isCalendarModalOpen = true;
    this.isDataModalOpen = false;
  }

  closeCalendarModal(): void {
    this.isCalendarModalOpen = false;
  }

  closeDataModal(): void {
    this.isDataModalOpen = false;
  }

  backToCalendarModal(): void {
    this.isDataModalOpen = false;
    this.isCalendarModalOpen = true;
  }

  generateCalendar(): void {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let firstWeekDay = firstDay.getDay();
    firstWeekDay = firstWeekDay === 0 ? 6 : firstWeekDay - 1;

    const totalDays = lastDay.getDate();
    this.calendarDays = [];

    for (let i = 0; i < firstWeekDay; i++) {
      this.calendarDays.push(null);
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      this.calendarDays.push(this.formatDate(date));
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  isPastDate(date: string): boolean {
    const today = new Date();
    const todayString = this.formatDate(today);
    return date < todayString;
  }

  previousMonth(): void {
    const today = new Date();
    const displayedYear = this.currentMonth.getFullYear();
    const displayedMonth = this.currentMonth.getMonth();

    if (
      displayedYear < today.getFullYear() ||
      (displayedYear === today.getFullYear() && displayedMonth <= today.getMonth())
    ) {
      return;
    }

    this.currentMonth = new Date(displayedYear, displayedMonth - 1, 1);
    this.generateCalendar();
  }

  isMinMonth(): boolean {
    const today = new Date();
    return (
      this.currentMonth.getFullYear() === today.getFullYear() &&
      this.currentMonth.getMonth() === today.getMonth()
    );
  }

  nextMonth(): void {
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 1);
    const nextMonthDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);

    if (nextMonthDate > maxDate) {
      return;
    }

    this.currentMonth = nextMonthDate;
    this.generateCalendar();
  }

  isMaxMonth(): boolean {
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 1);
    return (
      this.currentMonth.getFullYear() === maxDate.getFullYear() &&
      this.currentMonth.getMonth() === maxDate.getMonth()
    );
  }

  getCurrentMonthName(): string {
    return this.monthNames[this.currentMonth.getMonth()];
  }

  selectDate(date: string): void {
    this.selectedDate = date;
    this.selectedTime = null;
    this.availableTimes = this.appointmentService.getAvailableTimesForDate(date);
  }

  // Al seleccionar el horario, cerramos el modal del calendario y abrimos el modal de datos
  selectTimeAndOpenData(time: string): void {
    this.selectedTime = time;

    if (this.selectedDate && this.appointmentService.isTimeOccupied(this.selectedDate, this.selectedTime)) {
      alert('Lo sentimos, este horario acaba de ser ocupado. Selecciona otro.');
      this.availableTimes = this.appointmentService.getAvailableTimesForDate(this.selectedDate);
      this.selectedTime = null;
      return;
    }

    // Limpiar formulario anterior o mantener si deseas
    this.clientName = '';
    this.clientPhone = '';
    this.clientEmail = '';
    this.clientMessage = '';

    this.isCalendarModalOpen = false;
    this.isDataModalOpen = true;
  }

  submitAppointment(): void {
    if (!this.selectedTherapy || !this.selectedDate || !this.selectedTime) {
      alert('Faltan datos de la cita.');
      return;
    }

    if (!this.clientName.trim()) {
      alert('Por favor escribe tu nombre completo.');
      return;
    }

    // VALIDACIÓN ESTRICTA DEL TELÉFONO
    if (!this.clientPhone || !this.clientPhone.trim()) {
      alert('Es necesario poner un número de teléfono para agendar la cita.');
      return;
    }

    const appointment: Appointment = {
      id: Date.now(),
      therapyId: this.selectedTherapy.id,
      therapyName: this.selectedTherapy.name,
      date: this.selectedDate,
      time: this.selectedTime,
      clientName: this.clientName.trim(),
      clientPhone: this.clientPhone.trim(),
      clientEmail: this.clientEmail.trim() || undefined,
      message: this.clientMessage.trim() || undefined,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    this.appointmentService.createAppointment(appointment);

    // CONSTRUIR MENSAJE DE WHATSAPP
    const message =
      `Hola, quiero agendar una cita.\n\n` +
      `Nombre: ${this.clientName}\n` +
      `Teléfono: ${this.clientPhone}\n` +
      `Terapia: ${this.selectedTherapy.name}\n` +
      `Fecha: ${this.selectedDate}\n` +
      `Horario: ${this.selectedTime}\n` +
      `Duración: ${this.selectedTherapy.duration}` +
      (this.clientEmail.trim() ? `\nCorreo: ${this.clientEmail}` : '') +
      (this.clientMessage.trim() ? `\nMensaje: ${this.clientMessage}` : '');

    const whatsappUrl = `https://wa.me/526691648819?text=` + encodeURIComponent(message);

    window.open(whatsappUrl, '_blank');
    this.isDataModalOpen = false;
  }
}