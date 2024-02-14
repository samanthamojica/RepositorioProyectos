import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../models/alumno';
import { OpAlumnoService } from '../services/op-alumno.service';

@Component({
  selector: 'app-eliminar-alumno-num-cuenta',
  templateUrl: './eliminar-alumno-num-cuenta.component.html',
  styleUrls: ['./eliminar-alumno-num-cuenta.component.css'],
})
export class EliminarAlumnoNumCuentaComponent {
  numCuenta: String;
  band: boolean;
  alumno: Alumno = new Alumno();
  error: boolean;

  constructor(
    private ruta: ActivatedRoute,
    private servicioAlumno: OpAlumnoService
  ) {}

  ngOnInit(): void {
    this.obtenerNCuenta();   
  }

  obtenerNCuenta() {
    this.numCuenta = this.ruta.snapshot.params['numeroCuenta'];
      if (this.numCuenta == "") {
      this.error = true;
    } else {
      this.error = false;
      this.getAlumno();
    }
  }

  getAlumno() { this.servicioAlumno.getAlumno(this.numCuenta).subscribe((alumnoRecibido) => {
        this.alumno = alumnoRecibido;
      });
  }

  eliminarAlumno() {
    this.servicioAlumno
      .eliminarAlumno(this.numCuenta)
      .subscribe((respuesta) => {
        if (respuesta == true) {
          this.band = true;
        } else {
          this.band = false;
        }
      });
  }

  guardarNumC(nuCuenta: String) {
    this.numCuenta = nuCuenta;
  }
}
