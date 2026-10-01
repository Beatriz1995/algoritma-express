import { Component } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  // =========================================
  // TESTIMONIOS
  // =========================================

  testimonials: Testimonial[] = [
    {
      text: '“Me gusta mucho, he ido varias veces y te atiende muy bien y te hace sentir en confianza”',
      author: 'Guía turístico'
    },
    {
      text: '“Te relaja mucho su voz.”',
      author: 'Ana Gabriela Sanchez Hernandez'
    },
    {
      text: '“Excelente atención.”',
      author: 'Salomón Montes'
    }
  ];



  // =========================================
  // TESTIMONIO ACTUAL
  // =========================================

  currentIndex = 0;


// =========================================
// SIGUIENTE
// =========================================
next(): void {
  const step = window.innerWidth <= 600 ? 1 : 3;
  if (this.currentIndex + step < this.testimonials.length) {
    this.currentIndex += step;
  }
}

// =========================================
// ANTERIOR
// =========================================
previous(): void {
  const step = window.innerWidth <= 600 ? 1 : 3;
  if (this.currentIndex - step >= 0) {
    this.currentIndex -= step;
  }
}

// =========================================
// TESTIMONIOS VISIBLES
// =========================================
get visibleTestimonials(): Testimonial[] {
  const count = window.innerWidth <= 600 ? 1 : 3;
  return this.testimonials.slice(
    this.currentIndex,
    this.currentIndex + count
  );
}

  // =========================================
  // IR A TESTIMONIO
  // =========================================

  goTo(index: number): void {

    this.currentIndex = index;

  }


}
