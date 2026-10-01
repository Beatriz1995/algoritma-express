export interface Schedule {

  id: number;

  patientName: string;

  patientEmail: string;

  patientPhone: string;

  therapyId: number;

  therapyName: string;

  doctorId: number;

  doctorName: string;

  date: string;

  startTime: string;

  endTime: string;

  duration: number;

  status: AppointmentStatus;

  notes?: string;

  createdAt?: string;

  updatedAt?: string;

}

export type AppointmentStatus =
  | 'pending'
  | 'confirmed'
  | 'completed'
  | 'cancelled';