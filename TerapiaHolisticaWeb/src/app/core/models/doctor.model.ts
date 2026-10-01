export interface Doctor {

  id: number;

  name: string;

  specialty: string;

  experience: number;

  photo: string;

  email: string;

  phone: string;

  address: string;

  description: string;

  certifications: string[];

  socialMedia: {

    facebook: string;

    instagram: string;

    whatsapp: string;

  };

}