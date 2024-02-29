import { Component } from '@angular/core';
import { AnillosService } from '../servicios/anillos.service';
import { Anillo } from '../models/anillo';
import { Router } from '@angular/router';
import { CategoriasAnillos } from '../models/categorias-anillos';
import { CategoriasAnillosService } from '../servicios/categorias-anillos.service';

@Component({
  selector: 'app-anillos',
  templateUrl: './anillos.component.html',
  styleUrls: ['./anillos.component.css'],
})
export class AnillosComponent {
aregloCategorias: CategoriasAnillos[];
arregloAnillos: Anillo[];

  constructor(private servCategoriasAnillo: CategoriasAnillosService,
              private anilloService :AnillosService
    ) {}

  ngOnInit(): void {
    this.obtenerCategoriasAnillos();
    this.obtenerInfoAnillos();
  }

  obtenerCategoriasAnillos(){
    this.servCategoriasAnillo.obtenerCategoriasAnillos().subscribe((categorias)=>{
       this.aregloCategorias = categorias;
       })
    
  }

  obtenerInfoAnillos(){
    this.anilloService.getAnillos().subscribe((infoAnillos)=>{
        this.arregloAnillos = infoAnillos;
       })
    
  }

 

}
