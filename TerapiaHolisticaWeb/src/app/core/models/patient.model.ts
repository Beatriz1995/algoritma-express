export interface Patient {

  id: number;

  firstName: string;

  lastName: string;

  fullName?: string;

  email: string;

  phone: string;

  birthDate?: string;

  gender?: Gender;

  address?: string;

  city?: string;

  emergencyContact?: EmergencyContact;

  notes?: string;

  active: boolean;

  createdAt?: string;

  updatedAt?: string;

}

export interface EmergencyContact {

  name: string;

  relationship: string;

  phone: string;

}

export type Gender =
  | 'male'
  | 'female'
  | 'other';