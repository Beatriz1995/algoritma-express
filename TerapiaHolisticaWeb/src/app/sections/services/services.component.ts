import { Component } from '@angular/core';

interface TherapyCard {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  therapies: TherapyCard[] = [
    {
      id: 1,
      name: 'Conoterapia',
      shortDescription: 'Alivio y bienestar',
      description:
        'En esta terapia de limpieza de oídos descontracturo los músculos esternocleidomastoideos,(cuello) trapecios (hombros) y occipitales, (nuca) que cuando están inflamados pueden causar vértigos, sumbidos, inflamación de oídos dolores de cabeza y *acumulación de cerumen. 🌀👂 Luego, realizo una limpieza profunda con un cono terapéutico, que extrae suavemente el cerumen de tus oídos',
      duration: '60 minutos',
      icon: '✧'
    },
    {
      id: 2,
      name: 'Alineación de Chakras',
      shortDescription: 'Armonía para cuerpo, mente y energía.',
      description:
        'Primero hacemos un Anclaje para conectar con la energía de la madre Tierra y del universo de Dios en el corazón* y entrar en punto cero. Después, limpio tu energía de vida mediante una meditacion guiada usando geometría sagrada Esto te ayuda a liberar bloqueos, calmar tu mente y recuperar la claridad y el equilibrio 🌀. Luego armonizo tus chakras con cuarzos y péndulo 💎, ayudando a que toda tu energía se estabilice y eliminar todas esas energías densas para que sientas más paz, más conexión y más bienestar . Y finalizó sahumando tu campo energético con salvia blanca (hiervas).',
      duration: '60 minutos',
      icon: '◇'
    },
    {
      id: 3,
      name: 'Masaje terapéutico ',
      shortDescription: 'Conexión y equilibrio interior.',
      description:
        'Esta terapia de masaje se enfoca en espalda, hombros, cuello, nuca y brazos, el tiempo restante se trabajan las piernas. No solo uso mis manos con movimientos fisioalternativos, también aplico herramientas terapéuticas para llegar a mas profundo del musculo. Ideal para liberar tensión, relajar cuerpo y mente.',
      duration: '60 minutos',
      icon: '☼'
    },
  ];

  selectedTherapy: TherapyCard | null = null;

  selectTherapy(therapy: TherapyCard): void {
    this.selectedTherapy = therapy;
  }

  clearSelection(): void {
    this.selectedTherapy = null;
  }

}