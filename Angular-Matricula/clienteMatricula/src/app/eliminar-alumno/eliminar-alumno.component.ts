import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { OpAlumnoService } from '../services/op-alumno.service';
import { Alumno } from '../models/alumno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.component.html',
  styleUrls: ['./eliminar-alumno.component.css'],
})
export class EliminarAlumnoComponent {
  listaAlumos: Alumno[];
  band: boolean;
  numeroCuenta: string = '';
  boton: boolean = true;
  titulo: string = '';
  numCuenta: String;
 

  constructor(private servicioAlumno: OpAlumnoService) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this.servicioAlumno.getAlumnos().subscribe((listaAlumnos) => {
      (this.listaAlumos = listaAlumnos)
      console.log()
    })
  

  }

  eliminarAlumno() {
      this.servicioAlumno.eliminarAlumno(this.numCuenta).subscribe((respuesta) => {
      if (respuesta == true) {
        this.band = true;
      } else {
        this.band = false;
      }
      this.getAlumnos();
    });
  }


  guardarNumC(numCuenta: String){
    this.numCuenta = numCuenta;
  }
  
}
