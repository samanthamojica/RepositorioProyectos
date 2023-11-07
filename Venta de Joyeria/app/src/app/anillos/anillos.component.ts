import { Component } from '@angular/core';
import { AnillosService } from '../servicios/anillos.service';
import { Anillo } from '../models/anillo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anillos',
  templateUrl: './anillos.component.html',
  styleUrls: ['./anillos.component.css'],
})
export class AnillosComponent {
  arregloAnillos: Anillo[] = [];
  totalAnillos : number = 0;
  idAnillo : string;

  constructor(private servicioAnillo: AnillosService,
             ) {}

  ngOnInit(): void {
   /*  this.arregloAnillos = this.servicioAnillo.anillos;    
   this.totalAnillos = this.arregloAnillos.length; */
  }

  /* obtenerIdAnillo(idAnillo:string){
    debugger
    console.log(idAnillo);
  //  this.route.navigate(['Anillo',this.idAnillo])
    debugger
  } */

}
