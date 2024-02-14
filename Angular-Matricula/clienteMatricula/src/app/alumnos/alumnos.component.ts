import { Component, OnInit } from '@angular/core';
import { OpAlumnoService } from '../services/op-alumno.service';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit{
  alumno: Alumno = new Alumno();
  nombreA: string = '';

  constructor(/* private alumnoService: OpAlumnoService */) {}

  ngOnInit(): void {
   /* this.alumnoService.getAlumno(5).subscribe((e) =>(this.alumno = e)); 
   console.log(this.alumno.idAlumno) */
  }
}
