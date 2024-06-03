import { Component } from '@angular/core';
import { VoceMenu } from '../models/voce-menu';

@Component({
  selector: 'app-intestazione',
  templateUrl: './intestazione.component.html',
  styleUrl: './intestazione.component.css'
})
export class IntestazioneComponent {
  vociMenu: VoceMenu[] = [
    {
      titolo: "Chi siamo",
      url: "https://www.google.com"
    },
    {
      titolo: "Contatti",
      url: "https://www.instagram.com"
    },
    {
      titolo: "Assistenza",
      url: "https://www.ferrari.com"
    },
    {
      titolo: "Lavora per noi",
      url: "https://www.amazon.com"
    }
  ]

  utenteLoggato = true;
}
