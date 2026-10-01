import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { WhatsappButtonComponent } from '../../shared/whatsapp-button/whatsapp-button.component';

import { HeroComponent } from '../../sections/hero/hero.component';
import { BenefitsComponent } from '../../sections/benefits/benefits.component';
import { AboutComponent } from '../../sections/about/about.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { AppointmentComponent } from '../../sections/appointment/appointment.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { GalleryComponent } from '../../sections/gallery/gallery.component';
import { FaqComponent } from '../../sections/faq/faq.component';
import { LocationComponent } from '../../sections/location/location.component';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent,

    HeroComponent,
    BenefitsComponent,
    AboutComponent,
    TestimonialsComponent,
    AppointmentComponent,
    ServicesComponent,
    GalleryComponent,
    FaqComponent,
    LocationComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}