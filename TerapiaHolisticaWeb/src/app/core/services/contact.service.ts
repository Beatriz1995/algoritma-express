import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /**
   * Cambiar a true cuando exista el backend.
   */
  private useApi = false;

  constructor(private api: ApiService) {}

  /**
   * Enviar formulario de contacto
   */
  sendContact(contact: Contact): Observable<any> {

    if (this.useApi) {
      return this.api.post<any>('contact', contact);
    }

    console.log('Formulario enviado:', contact);

    return of({
      success: true,
      message: 'Mensaje enviado correctamente.'
    }).pipe(
      delay(1500)
    );
  }

}