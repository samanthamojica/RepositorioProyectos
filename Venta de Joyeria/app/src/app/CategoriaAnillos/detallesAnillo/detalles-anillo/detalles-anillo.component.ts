import { Component } from '@angular/core';
import { AnillosService } from '../../../servicios/anillos.service';
import { Anillo } from 'src/app/models/anillo';

@Component({
  selector: 'app-detalles-anillo',
  templateUrl: './detalles-anillo.component.html',
  styleUrls: ['./detalles-anillo.component.css'],
})
export class DetallesAnilloComponent {
  DetallesAnillo: Anillo;
  catalogoImagenes = [];

  constructor(private anillosService: AnillosService) {}

  ngOnInit(): void {
   /*  debugger
    this.DetallesAnillo = this.anillosService.obtenerInformacionAnillo('A001');
    debugger
    this.obtenerImagenesCat(); */
  }
/* 
  obtenerImagenesCat() {
    this.catalogoImagenes = this.DetallesAnillo.catalogoImagenes;
    debugger
  } */
}
