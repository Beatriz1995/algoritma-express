import { Component } from '@angular/core';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  faqs: FaqItem[] = [

    {
      id: 1,
      question: '¿Qué es una terapia holística?',
      answer:
        'Es un enfoque que busca favorecer el equilibrio y bienestar de la persona considerando diferentes aspectos de su experiencia, como cuerpo, mente, emociones y energía.'
    },

    {
      id: 2,
      question: '¿Qué terapias ofrecen?',
      answer:
        'Contamos con diferentes tipos de servicio como: masajes terapéuticos, conoterapia, alineación de chakras.'
    },

    {
      id: 3,
      question: '¿Cuánto dura una sesión?',
      answer:
        'La duración depende del tipo de sesión. Al momento de agendar te indicaremos el tiempo aproximado correspondiente a la terapia que hayas elegido.'
    },

    {
      id: 4,
      question: '¿Necesito experiencia previa para recibir una terapia?',
      answer:
        'No. Las sesiones están pensadas para personas con o sin experiencia previa.'
    },

    {
      id: 5,
      question: '¿Cómo puedo agendar una sesión?',
      answer:
        'Puedes solicitar una cita a través de nuestro sistema de agenda o enviarnos un mensaje por WhatsApp para consultar disponibilidad.'
    },

    {
      id: 6,
      question: '¿Puedo cancelar o cambiar mi cita?',
      answer:
        'Sí. Si necesitas modificar tu cita, te recomendamos comunicarte con anticipación.'
    }

  ];


  openFaq: number | null = null;


  toggleFaq(id: number): void {

    if (this.openFaq === id) {

      this.openFaq = null;

    } else {

      this.openFaq = id;

    }

  }

}