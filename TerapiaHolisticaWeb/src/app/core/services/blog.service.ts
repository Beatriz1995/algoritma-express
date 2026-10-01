import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  /**
   * Cambiar a true cuando exista el backend.
   */
  private useApi = false;

  constructor(private api: ApiService) {}

  /**
   * Artículos de prueba
   */
  private posts: Blog[] = [
    /*{
      id: 1,
      title: '¿Qué es el Reiki y cuáles son sus beneficios?',
      slug: 'que-es-el-reiki',
      summary: 'Descubre cómo el Reiki puede ayudarte a equilibrar tu energía.',
      content: 'Contenido completo del artículo...',
      image: 'assets/images/blog/reiki.jpg',
      category: 'Reiki',
      author: 'Dra. María López',
      tags: ['Reiki', 'Energía', 'Bienestar'],
      publishedAt: '2026-08-01',
      featured: true,
      active: true,
      gallery: 
      readTime: number,
    },
    {
      id: 2,
      title: 'Beneficios del Biomagnetismo',
      slug: 'beneficios-del-biomagnetismo',
      summary: 'Conoce cómo funciona esta terapia complementaria.',
      content: 'Contenido completo del artículo...',
      image: 'assets/images/blog/biomagnetismo.jpg',
      category: 'Biomagnetismo',
      author: 'Dra. María López',
      tags: ['Biomagnetismo', 'Salud'],
      publishedAt: '2026-08-05',
      featured: false,
      active: true
    }*/
  ];

  /**
   * Obtener todos los artículos
   */
  getPosts(): Observable<Blog[]> {

    if (this.useApi) {
      return this.api.get<Blog[]>('blog');
    }

    return of(this.posts).pipe(
      delay(400)
    );
  }

  /**
   * Obtener artículo por ID
   */
  getPost(id: number): Observable<Blog> {

    if (this.useApi) {
      return this.api.getById<Blog>('blog', id);
    }

    const post = this.posts.find(p => p.id === id)!;

    return of(post);
  }

  /**
   * Obtener artículo por Slug
   */
  getPostBySlug(slug: string): Observable<Blog> {

    if (this.useApi) {
      return this.api.get<Blog>(`blog/${slug}`);
    }

    const post = this.posts.find(p => p.slug === slug)!;

    return of(post);
  }

  /**
   * Obtener artículos destacados
   */
  getFeaturedPosts(): Observable<Blog[]> {

    if (this.useApi) {
      return this.api.get<Blog[]>('blog/featured');
    }

    return of(
      this.posts.filter(post => post.featured)
    );
  }

  /**
   * Obtener artículos por categoría
   */
  getPostsByCategory(category: string): Observable<Blog[]> {

    if (this.useApi) {
      return this.api.get<Blog[]>(`blog/category/${category}`);
    }

    return of(
      this.posts.filter(post => post.categoryId === category)
    );
  }

}