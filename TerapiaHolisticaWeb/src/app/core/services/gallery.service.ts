import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  /**
   * Cambiar a true cuando exista el backend.
   */
  private useApi = false;

  constructor(private api: ApiService) {}

  /**
   * Galería de prueba
   */
  private gallery: Gallery[] = [
    {
      id: 1,
      title: 'Sesión de Reiki',
      description: 'Ambiente relajante para terapia Reiki.',
      image: 'assets/images/gallery/reiki-1.jpg',
      category: 'Reiki',
      featured: true,
      order: 1,
      active: true
    },
    {
      id: 2,
      title: 'Biomagnetismo',
      description: 'Aplicación de pares biomagnéticos.',
      image: 'assets/images/gallery/biomagnetismo-1.jpg',
      category: 'Biomagnetismo',
      featured: false,
      order: 2,
      active: true
    },
    {
      id: 3,
      title: 'Flores de Bach',
      description: 'Preparación personalizada de esencias.',
      image: 'assets/images/gallery/flores-bach-1.jpg',
      category: 'Flores de Bach',
      featured: false,
      order: 3,
      active: true
    },
    {
      id: 4,
      title: 'Meditación',
      description: 'Espacio para meditación guiada.',
      image: 'assets/images/gallery/meditacion-1.jpg',
      category: 'Meditación',
      featured: true,
      order: 4,
      active: true
    }
  ];

  /**
   * Obtener todas las imágenes
   */
  getGallery(): Observable<Gallery[]> {

    if (this.useApi) {
      return this.api.get<Gallery[]>('gallery');
    }

    return of(this.gallery).pipe(
      delay(300)
    );
  }

  /**
   * Obtener una imagen por ID
   */
  getImage(id: number): Observable<Gallery> {

    if (this.useApi) {
      return this.api.getById<Gallery>('gallery', id);
    }

    const image = this.gallery.find(item => item.id === id)!;

    return of(image);
  }

  /**
   * Obtener imágenes destacadas
   */
  getFeatured(): Observable<Gallery[]> {

    if (this.useApi) {
      return this.api.get<Gallery[]>('gallery/featured');
    }

    return of(
      this.gallery.filter(item => item.featured)
    );
  }

  /**
   * Obtener imágenes por categoría
   */
  getByCategory(category: string): Observable<Gallery[]> {

    if (this.useApi) {
      return this.api.get<Gallery[]>(`gallery/category/${category}`);
    }

    return of(
      this.gallery.filter(item => item.category === category)
    );
  }

}