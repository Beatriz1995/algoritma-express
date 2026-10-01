import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;

  constructor() { }

  /**
   * GET
   */
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { params });
  }

  /**
   * GET por ID
   */
  getById<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }

  /**
   * POST
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body);
  }

  /**
   * PUT
   */
  put<T>(endpoint: string, id: number | string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${id}`, body);
  }

  /**
   * PATCH
   */
  patch<T>(endpoint: string, id: number | string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${endpoint}/${id}`, body);
  }

  /**
   * DELETE
   */
  delete<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }

  /**
   * Subir archivos
   */
  upload<T>(endpoint: string, formData: FormData): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, formData);
  }
}