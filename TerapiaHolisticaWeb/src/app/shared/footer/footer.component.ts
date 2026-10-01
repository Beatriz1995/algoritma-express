import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  scrollTo(section: string): void {

    const element = document.getElementById(section);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }

  openGoogleMaps(): void {

    const mapsUrl =
      'https://www.google.com/maps/search/?api=1&query=Limas%2018235%2C%20Universidad%2094%2C%2082159%20Mazatl%C3%A1n%2C%20Sinaloa';

    window.open(mapsUrl, '_blank');

  }

  openWhatsApp(): void {

    const whatsappUrl =
      'https://wa.me/526691648819';

    window.open(whatsappUrl, '_blank');

  }

}