import { Component } from '@angular/core';

@Component({
  selector: 'app-gruppo-prodotti',
  templateUrl: './gruppo-prodotti.component.html',
  styleUrl: './gruppo-prodotti.component.css'
})
export class GruppoProdottiComponent {
  titolo: string = "Oggi in sconto!!!"; // type inference

  saluta() {
    let n = 9;
    let m: number;
  }
}
