import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageKey = 'holistica_admin_logged';

  // =========================================
  // INICIAR SESIÓN
  // =========================================

  login(
    username: string,
    password: string
  ): boolean {

    /*
     * CREDENCIALES DE PRUEBA
     *
     * Más adelante las sustituiremos por
     * autenticación real mediante backend.
     */

    const validUsername = 'admin';
    const validPassword = '123456';


    if (
      username === validUsername &&
      password === validPassword
    ) {

      localStorage.setItem(
        this.storageKey,
        'true'
      );

      return true;

    }


    return false;

  }


  // =========================================
  // COMPROBAR SESIÓN
  // =========================================

  isLoggedIn(): boolean {

    return (
      localStorage.getItem(
        this.storageKey
      ) === 'true'
    );

  }


  // =========================================
  // CERRAR SESIÓN
  // =========================================

  logout(): void {

    localStorage.removeItem(
      this.storageKey
    );

  }

}