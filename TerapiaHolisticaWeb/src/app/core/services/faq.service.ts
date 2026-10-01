import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Faq } from '../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  /**
   * Cambiar a true cuando exista el backend.
   */
  private useApi = false;

  constructor(private api: ApiService) {}

  /**
   * Preguntas frecuentes de prueba
   */
  private faqs: Faq[] = [
    {
      id: 1,
      question: '¿Qué es una terapia holística?',
      answer: 'Es un enfoque integral que busca equilibrar cuerpo, mente y espíritu para mejorar el bienestar general.',
      order: 1,
      active: true
    },
    {
      id: 2,
      question: '¿Necesito una cita previa?',
      answer: 'Sí. Todas las sesiones se realizan únicamente con cita programada.',
      order: 2,
      active: true
    },
    {
      id: 3,
      question: '¿Cuánto dura una sesión?',
      answer: 'Dependiendo de la terapia, la duración puede variar entre 45 y 90 minutos.',
      order: 3,
      active: true
    },
    {
      id: 4,
      question: '¿Las terapias sustituyen un tratamiento médico?',
      answer: 'No. Las terapias holísticas son un complemento y no sustituyen la atención médica profesional.',
      order: 4,
      active: true
    },
    {
      id: 5,
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos efectivo, transferencia bancaria y pagos con tarjeta.',
      order: 5,
      active: true
    }
  ];

  /**
   * Obtener todas las preguntas
   */
  getFaqs(): Observable<Faq[]> {

    if (this.useApi) {
      return this.api.get<Faq[]>('faqs');
    }

    return of(this.faqs).pipe(
      delay(300)
    );
  }

  /**
   * Obtener una pregunta por ID
   */
  getFaq(id: number): Observable<Faq> {

    if (this.useApi) {
      return this.api.getById<Faq>('faqs', id);
    }

    const faq = this.faqs.find(f => f.id === id)!;

    return of(faq);
  }

}