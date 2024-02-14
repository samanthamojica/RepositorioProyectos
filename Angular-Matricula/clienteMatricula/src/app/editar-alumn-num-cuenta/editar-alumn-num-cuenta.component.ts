import { Component } from '@angular/core';
import { ActivationEnd, Route, Router, ActivatedRoute } from '@angular/router';
import { OpAlumnoService } from '../services/op-alumno.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-editar-alumn-num-cuenta',
  templateUrl: './editar-alumn-num-cuenta.component.html',
  styleUrls: ['./editar-alumn-num-cuenta.component.css'],
})
export class EditarAlumnNumCuentaComponent {
  numCuenta: String;
  formularioEditar: FormGroup;
  alumno: Alumno = new Alumno();
  nombre: string;
  band: boolean;
  error: boolean;

  constructor(
    private ruta: ActivatedRoute,
    private opAlumnoService: OpAlumnoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.obtenerNCuenta();
  }

  obtenerNCuenta() {
    this.numCuenta = this.ruta.snapshot.params['numCuenta'];
    if (this.numCuenta == '') {
      this.error = true;
    } else {
      this.error = false;
      this.crearFormulario();
      this.opAlumnoService.getAlumno(this.numCuenta).subscribe(
        (alumnoRecibido) => {
           this.alumno = alumnoRecibido;
          this.rellenarFormulario();
        });
    }
  }

  crearFormulario() {
    this.formularioEditar = this.formBuilder.group({
      nombreAlumno: ['', Validators.required],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      fechaNacimiento: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  rellenarFormulario() {
    this.formularioEditar.setValue({
      nombreAlumno: this.alumno.nombreAlumno,
      apellidoPaterno: this.alumno.apPaternoA,
      apellidoMaterno: this.alumno.apMaternoA,
      fechaNacimiento: this.alumno.fechaNacimientoA,
      email: this.alumno.emailA,
    });
  }
  editarAlumno() {
    this.alumno.nombreAlumno = this.formularioEditar.value.nombreAlumno;
    this.alumno.apPaternoA = this.formularioEditar.value.apellidoPaterno;
    this.alumno.apMaternoA = this.formularioEditar.value.apellidoMaterno;
    this.alumno.fechaNacimientoA = this.formularioEditar.value.fechaNacimiento;
    this.alumno.emailA = this.formularioEditar.value.email;
    this.opAlumnoService.editarAlumno(this.alumno).subscribe((r) => {
      if (r == true) {
        this.band = true;
      } else {
        this.band = false;
      }
      this.formularioEditar.reset();
    });
  }
}
