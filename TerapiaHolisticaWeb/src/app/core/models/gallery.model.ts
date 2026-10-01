export interface Gallery {

  id: number;

  title: string;

  description: string;

  image: string;

  category: string;

  featured: boolean;

  order: number;

  active: boolean;

  createdAt?: string;

  updatedAt?: string;

}