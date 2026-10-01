import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { Doctor } from '../../core/models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  /**
   * Cambiar a true cuando exista el backend.
   */
  private useApi = false;

  constructor(private api: ApiService) {}

  /**
   * Datos de prueba
   */
  private doctor: Doctor = {
    id: 1,
    name: 'Dra. María López',
    specialty: 'Terapeuta Holística',
    experience: 12,
    photo: 'assets/images/therapist.jpg',
    email: 'contacto@terapiaholistica.com',
    phone: '+52 55 1234 5678',
    address: 'Ciudad de México',
    description:
      'Especialista en terapias holísticas enfocadas en el bienestar físico, emocional y energético. Cuenta con amplia experiencia en Reiki, Biomagnetismo, Flores de Bach y técnicas de relajación.',
    certifications: [
      'Maestría en Terapias Holísticas',
      'Certificación Internacional Reiki Usui',
      'Biomagnetismo Médico',
      'Flores de Bach'
    ],
    socialMedia: {
      facebook: 'https://www.facebook.com/share/199U5nyp7J/',
      instagram: 'https://instagram.com/',
      whatsapp: 'https://wa.me/526691648819'
    }
  };

  /**
   * Obtener información de la terapeuta
   */
  getDoctor(): Observable<Doctor> {

    if (this.useApi) {
      return this.api.get<Doctor>('doctor');
    }

    return of(this.doctor);
  }

}