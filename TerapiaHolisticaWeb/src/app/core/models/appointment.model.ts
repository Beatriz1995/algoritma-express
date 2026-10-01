export interface Appointment {

  id: number;

  therapyId: number;

  therapyName: string;

  date: string;

  time: string;

  clientName?: string;

  clientPhone?: string;

  clientEmail?: string;

  message?: string;

  status: 'available' | 'pending' | 'confirmed' | 'cancelled';

  createdAt?: string;
}