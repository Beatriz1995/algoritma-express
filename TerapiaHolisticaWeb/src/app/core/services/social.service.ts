import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Social } from '../models/social.model';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  /**
   * Cambiar a true cuando exista el backend.
   */
  private useApi = false;

  constructor(private api: ApiService) {}

  /**
   * Redes sociales de prueba
   */
  private social: Social = {

    facebook: 'https://www.facebook.com/share/199U5nyp7J/',

    instagram: 'https://instagram.com/terapiasholisticas',

    tiktok: 'https://www.tiktok.com/@norasanchez198?_r=1&_t=ZS-99Jxg4VRC1E',

    youtube: 'https://youtube.com/@terapiasholisticas',

    whatsapp: 'https://wa.me/526691648819',

    telegram: '',

    linkedin: '',

    x: '',

    email: 'contacto@terapiasholisticas.com',

    website: 'https://terapiasholisticas.com',

    active: true

  };

  /**
   * Obtener redes sociales
   */
  getSocial(): Observable<Social> {

    if (this.useApi) {
      return this.api.get<Social>('social');
    }

    return of(this.social).pipe(
      delay(300)
    );
  }

  /**
   * Actualizar redes sociales
   */
  updateSocial(data: Social): Observable<any> {

    if (this.useApi) {
      return this.api.put('social', 1, data);
    }

    this.social = data;

    return of({
      success: true,
      message: 'Redes sociales actualizadas correctamente.'
    }).pipe(
      delay(500)
    );
  }

}