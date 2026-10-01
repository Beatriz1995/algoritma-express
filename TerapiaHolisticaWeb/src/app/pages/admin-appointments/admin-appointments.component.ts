import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { AppointmentService } from '../../core/services/appointment.service';
import { Appointment } from '../../core/models/appointment.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
selector: 'app-admin-appointments',
standalone: true,
imports: [DatePipe],
templateUrl: './admin-appointments.component.html',
styleUrl: './admin-appointments.component.css'
})
export class AdminAppointmentsComponent {

appointments: Appointment[] = [];

constructor(
private appointmentService: AppointmentService,
private authService: AuthService,
private router: Router
) {

this.loadAppointments();

}

// =========================================
// CARGAR CITAS
// =========================================

loadAppointments(): void {

this.appointments =
  this.appointmentService
    .getAppointments()
    .sort((a, b) => {

      // Las canceladas van al final

      if (
        a.status === 'cancelled' &&
        b.status !== 'cancelled'
      ) {
        return 1;
      }

      if (
        a.status !== 'cancelled' &&
        b.status === 'cancelled'
      ) {
        return -1;
      }


      // Ordenar por fecha y hora

      const dateA = new Date(
        `${a.date}T${a.time}`
      ).getTime();

      const dateB = new Date(
        `${b.date}T${b.time}`
      ).getTime();


      return dateA - dateB;

    });

}

// =========================================
// CANCELAR CITA
// =========================================

cancelAppointment(
appointmentId: number
): void {

const confirmCancel =
  confirm(
    '¿Seguro que deseas cancelar esta cita?'
  );


if (!confirmCancel) {

  return;

}


this.appointmentService.cancelAppointment(
  appointmentId
);


this.loadAppointments();

}

// =========================================
// WHATSAPP
// =========================================

openWhatsApp(
phone: string | undefined,
clientName: string | undefined
): void {

if (!phone) {

  alert(
    'Este cliente no proporcionó un número de teléfono.'
  );

  return;

}


const cleanPhone =
  phone.replace(/\D/g, '');


if (!cleanPhone) {

  alert(
    'El número de teléfono no es válido.'
  );

  return;

}


const message =
  encodeURIComponent(
    `Hola${clientName ? ` ${clientName}` : ''}, te contacto para dar seguimiento a tu cita de Terapias Holísticas.`
  );


window.open(
  `https://wa.me/52${cleanPhone}?text=${message}`,
  '_blank'
);

}


// =========================================
// CONFIRMAR CITA
// =========================================

confirmAppointment(
appointmentId: number
): void {

const confirmAction =
  confirm(
    '¿Seguro que deseas confirmar esta cita?'
  );

if (!confirmAction) {
  return;
}

this.appointmentService.confirmAppointment(
  appointmentId
);

this.loadAppointments();

}
// =========================================
// CERRAR SESIÓN
// =========================================

logout(): void {

this.authService.logout();

this.router.navigate(
  ['/admin/login']
);

}

// =========================================
// VOLVER AL INICIO
// =========================================

goHome(): void {

this.router.navigate(['/']);

}

}
