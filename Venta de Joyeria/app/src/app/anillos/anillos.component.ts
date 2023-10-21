import { Component } from '@angular/core';
import { AnillosService } from '../servicios/anillos.service';
import { Anillo } from '../models/anillo';

@Component({
  selector: 'app-anillos',
  templateUrl: './anillos.component.html',
  styleUrls: ['./anillos.component.css'],
})
export class AnillosComponent {
  arregloAnillos: Anillo[] = [];
  totalAnillos : number =0;

  constructor(private servicioAnillo: AnillosService) {}

  ngOnInit(): void {
    this.arregloAnillos = this.servicioAnillo.anillos;    
   this.totalAnillos = this.arregloAnillos.length;
  }
}
