import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  address = 'Limas 18235, Universidad 94, C.P. 82159, Mazatlán, Sinaloa';

  schedule = 'Atención con previa cita';

  openGoogleMaps(): void {
    const mapsUrl =
      'https://maps.app.goo.gl/8kHKZ7pRntRwTLYJ6';

    window.open(mapsUrl, '_blank');
  }

}