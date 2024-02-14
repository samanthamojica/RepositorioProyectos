import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alumno } from '../models/alumno';
import { OpAlumnoService } from '../services/op-alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css'],
})
export class AgregarAlumnoComponent {
  formularioRegistro: FormGroup;
  alumno: Alumno = new Alumno();
  alumnoRecibido: Alumno;
  band: boolean;
  esNuevo: boolean = true;
  titulo: string;
  modalEditar: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private servicioOpAlumno: OpAlumnoService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.crearFormulario();

    this.esNuevo = JSON.parse(this.rutaActiva.snapshot.params['esNuevo']);
    this.titulo = this.esNuevo ? 'Registro de nuevo Alumno' : 'Editar Alumno';

    if (!this.esNuevo) {
      this.alumno = this.servicioOpAlumno.alumno;
      this.formularioRegistro.setValue({
        nombreAlumno: this.alumno.nombreAlumno,
        apPaternoA: this.alumno.apPaternoA,
        apMaternoA: this.alumno.apMaternoA,
        fechaNacimientoA: this.alumno.fechaNacimientoA,
        emailA: this.alumno.emailA,
      });
    }
  }

  crearFormulario() {
    this.formularioRegistro = this.formBuilder.group({
      nombreAlumno: ['', Validators.required],
      apPaternoA: [''],
      apMaternoA: [''],
      fechaNacimientoA: ['', Validators.required],
      emailA: ['', Validators.compose([Validators.email, Validators.required])],
    });
  }

  agregarAlumno() {
      this.alumno = this.formularioRegistro.value as Alumno;
        this.servicioOpAlumno.guardarAlumno(this.alumno).subscribe((alumnoRecibido) => {
        if (alumnoRecibido.nombreAlumno != null) {
          this.band = true;
        } else {
          this.band = false;
        }
      });
    this.formularioRegistro.reset();
  }

  editarAlumno() {
    this.alumno.nombreAlumno = this.formularioRegistro.value.nombreAlumno;
    this.alumno.apPaternoA = this.formularioRegistro.value.apPaternoA;
    this.alumno.apMaternoA = this.formularioRegistro.value.apMaternoA;
    this.alumno.fechaNacimientoA =
      this.formularioRegistro.value.fechaNacimientoA;
    this.alumno.emailA = this.formularioRegistro.value.emailA;

    this.servicioOpAlumno.editarAlumno(this.alumno).subscribe((r) => {
      if (r == true) {
        this.modalEditar = true;
      } else {
        this.modalEditar = false;
      }
      this.formularioRegistro.reset();
    });
  }
}
