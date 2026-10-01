import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Injectable({
providedIn: 'root'
})
export class AppointmentService {

// =========================================
// HORARIOS DE ATENCIÓN
// =========================================

private availableTimes: string[] = [
'10:00',
'11:00',
'12:00',
'16:00',
'17:00',
'18:00'
];

// =========================================
// CLAVE PARA LOCALSTORAGE
// =========================================

private readonly storageKey = 'holistica_appointments';

// =========================================
// CITAS
// =========================================

private appointments: Appointment[] = [];

// =========================================
// CONSTRUCTOR
// =========================================

constructor() {

this.loadAppointments();

}

// =========================================
// CARGAR CITAS
// =========================================

private loadAppointments(): void {

const savedAppointments =
  localStorage.getItem(this.storageKey);


if (!savedAppointments) {

  this.appointments = [

    {
      id: 1,
      therapyId: 1,
      therapyName: 'Terapia Reiki',
      date: '2026-08-20',
      time: '10:00',
      status: 'confirmed'
    },

    {
      id: 2,
      therapyId: 2,
      therapyName: 'Alineación de Chakras',
      date: '2026-08-20',
      time: '17:00',
      status: 'confirmed'
    }

  ];

  this.saveAppointments();

  return;

}


try {

  this.appointments =
    JSON.parse(savedAppointments);

} catch (error) {

  console.error(
    'Error al cargar las citas:',
    error
  );

  this.appointments = [];

}

}

// =========================================
// GUARDAR CITAS
// =========================================

private saveAppointments(): void {

localStorage.setItem(
  this.storageKey,
  JSON.stringify(this.appointments)
);

}

// =========================================
// OBTENER HORARIOS
// =========================================

getAvailableTimes(): string[] {

return [...this.availableTimes];

}

// =========================================
// OBTENER CITAS
// =========================================

getAppointments(): Appointment[] {

return [...this.appointments];

}

// =========================================
// OBTENER HORARIOS DISPONIBLES
// =========================================

getAvailableTimesForDate(
date: string
): string[] {

const occupiedTimes =
  this.appointments
    .filter(appointment =>
      appointment.date === date &&
      (
        appointment.status === 'pending' ||
        appointment.status === 'confirmed'
      )
    )
    .map(appointment =>
      appointment.time
    );


return this.availableTimes.filter(
  time =>
    !occupiedTimes.includes(time)
);

}

// =========================================
// COMPROBAR HORARIO OCUPADO
// =========================================

isTimeOccupied(
date: string,
time: string
): boolean {

return this.appointments.some(
  appointment =>
    appointment.date === date &&
    appointment.time === time &&
    (
      appointment.status === 'pending' ||
      appointment.status === 'confirmed'
    )
);

}

// =========================================
// CREAR CITA
// =========================================

createAppointment(
appointment: Appointment
): void {

this.appointments.push(
  appointment
);

this.saveAppointments();

}

// =========================================
// CONFIRMAR CITA
// =========================================

confirmAppointment(
appointmentId: number
): void {

const appointment =
  this.appointments.find(
    item => item.id === appointmentId
  );


if (!appointment) {

  return;

}


appointment.status = 'confirmed';

this.saveAppointments();

}

// =========================================
// CANCELAR CITA
// =========================================

cancelAppointment(
appointmentId: number
): void {

const appointment =
  this.appointments.find(
    item => item.id === appointmentId
  );


if (!appointment) {

  return;

}


appointment.status = 'cancelled';

this.saveAppointments();

}

}