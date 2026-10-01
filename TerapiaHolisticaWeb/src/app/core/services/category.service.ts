import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /**
   * Cambiar a true cuando exista el backend.
   */
  private useApi = false;

  constructor(private api: ApiService) {}

  /**
   * Categorías de prueba
   */
  private categories: Category[] = [
    {
      id: 1,
      name: 'Reiki',
      slug: 'reiki',
      description: 'Terapias de sanación energética.',
      icon: 'fa-solid fa-hand-sparkles',
      image: 'assets/images/categories/reiki.jpg',
      color: '#8D78C6',
      order: 1,
      active: true
    },
    {
      id: 2,
      name: 'Biomagnetismo',
      slug: 'biomagnetismo',
      description: 'Equilibrio mediante pares biomagnéticos.',
      icon: 'fa-solid fa-magnet',
      image: 'assets/images/categories/biomagnetismo.jpg',
      color: '#72B3A1',
      order: 2,
      active: true
    },
    {
      id: 3,
      name: 'Flores de Bach',
      slug: 'flores-de-bach',
      description: 'Terapia floral para el equilibrio emocional.',
      icon: 'fa-solid fa-seedling',
      image: 'assets/images/categories/flores-bach.jpg',
      color: '#E6A95C',
      order: 3,
      active: true
    },
    {
      id: 4,
      name: 'Meditación',
      slug: 'meditacion',
      description: 'Bienestar físico y mental.',
      icon: 'fa-solid fa-om',
      image: 'assets/images/categories/meditacion.jpg',
      color: '#5D8BC7',
      order: 4,
      active: true
    }
  ];

  /**
   * Obtener todas las categorías
   */
  getCategories(): Observable<Category[]> {

    if (this.useApi) {
      return this.api.get<Category[]>('categories');
    }

    return of(this.categories).pipe(
      delay(300)
    );
  }

  /**
   * Obtener categoría por ID
   */
  getCategory(id: number): Observable<Category> {

    if (this.useApi) {
      return this.api.getById<Category>('categories', id);
    }

    const category = this.categories.find(c => c.id === id)!;

    return of(category);
  }

  /**
   * Obtener categoría por Slug
   */
  getCategoryBySlug(slug: string): Observable<Category> {

    if (this.useApi) {
      return this.api.get<Category>(`categories/${slug}`);
    }

    const category = this.categories.find(c => c.slug === slug)!;

    return of(category);
  }

  /**
   * Obtener categorías activas
   */
  getActiveCategories(): Observable<Category[]> {

    if (this.useApi) {
      return this.api.get<Category[]>('categories/active');
    }

    return of(
      this.categories.filter(category => category.active)
    );
  }

}