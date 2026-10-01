import { Component } from '@angular/core';

interface GalleryImage {
  id: number;
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  images: GalleryImage[] = [

    {
      id: 1,
      image: '/images/gallery/1A.PNG',
      title: 'Espacio de Bienestar',
      category: 'Bienestar'
    },

    {
      id: 2,
      image: '/images/gallery/2A.PNG',
      title: 'Espacio de trabajo',
      category: 'Terapias'
    },

    {
      id: 3,
      image: '/images/gallery/3A.PNG',
      title: 'Espacio Holístico',
      category: 'Terapias'
    },

    {
      id: 4,
      image: '/images/gallery/4A.PNG',
      title: 'Bienestar Integral',
      category: 'Bienestar'
    },

    {
      id: 5,
      image: '/images/gallery/5A.webp',
      title: 'Armonía y Equilibrio',
      category: 'Armonía'
    },

    {
      id: 6,
      image: '/images/gallery/6A.jpg',
      title: 'Espacio de Sanación',
      category: 'Sanación'
    },


  ];

  selectedImage: GalleryImage | null = null;

  openImage(image: GalleryImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

}