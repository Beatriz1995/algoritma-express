import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {

  whatsappNumber = '526691648819';

  message = 'Hola Nora, vi su página web y me gustaría recibir información sobre las terapias holísticas y disponibilidad para agendar una sesión.';

  openWhatsApp(): void {

    const url =
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.message)}`;

    window.open(url, '_blank');
  }

}