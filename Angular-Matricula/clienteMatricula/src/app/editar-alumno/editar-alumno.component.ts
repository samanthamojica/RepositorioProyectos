import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';
import { OpAlumnoService } from '../services/op-alumno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css'],
})
export class EditarAlumnoComponent {
  band: boolean = false;
  numeroCuenta: string = '';
  listaAlumos: Array<Alumno> = [];
  formularioEditar: FormGroup;

  constructor(private alumnoOp: OpAlumnoService, private ruta: Router) {}

  ngOnInit(): void {
    this.alumnoOp.getAlumnos().subscribe((listaAlumnos) => {
      this.listaAlumos = listaAlumnos;
    });
  }
  editarAlumno(alumno: Alumno) {
    this.alumnoOp.alumno = alumno;
    this.ruta.navigateByUrl('/agregar-alumno/false');
  }
}
