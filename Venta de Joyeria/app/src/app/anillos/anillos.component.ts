import { Component } from '@angular/core';
import { AnillosService } from '../servicios/anillos.service';

import { CategoriasAnillos } from '../models/categorias-anillos';
import { CategoriasAnillosService } from '../servicios/categorias-anillos.service';
import { AnilloRequest } from '../models/anillo-request';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-anillos',
  templateUrl: './anillos.component.html',
  styleUrls: ['./anillos.component.css'],
})
export class AnillosComponent {
  aregloCategorias: CategoriasAnillos[];
  arregloAnillos: AnilloRequest[];
  keys: string[];
  key: string = '';
  page: number;
  constructor(
    private servCategoriasAnillo: CategoriasAnillosService,
    private anilloService: AnillosService
  ) {}

  ngOnInit(): void {
    this.obtenerCategoriasAnillos();
    this.obtenerInfoAnillos();
     }

  obtenerCategoriasAnillos() {
    this.servCategoriasAnillo
      .obtenerCategoriasAnillos()
      .subscribe((categorias) => {
        this.aregloCategorias = categorias;
      });
  }

  obtenerInfoAnillos() {
    this.anilloService.getAnillos().subscribe((infoAnillos) => {
      this.arregloAnillos = infoAnillos;
      for (let i = 0; i < this.arregloAnillos.length; i++) {
        this.keys = Object.keys(this.arregloAnillos[i].catalogoImagenes);
        this.arregloAnillos[i].imagenMuestra = this.keys[0];
      }
    });
  }
}
