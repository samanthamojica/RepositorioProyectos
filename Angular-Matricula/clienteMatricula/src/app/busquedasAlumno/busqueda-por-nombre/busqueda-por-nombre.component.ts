import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { OpAlumnoService } from 'src/app/services/op-alumno.service';


@Component({
  selector: 'app-busqueda-por-nombre',
  templateUrl: './busqueda-por-nombre.component.html',
  styleUrls: ['./busqueda-por-nombre.component.css'],
 
})
export class BusquedaPorNombreComponent {
  nombreAlumno: string;
  listaAlumnos: Array<Alumno> = [];
  numeroCuenta: string;
  band: boolean = false;

  constructor(
    private ruta: ActivatedRoute,
    private OpAlumnoService: OpAlumnoService
  ) {}

  ngOnInit(): void {
    this.nombreAlumno = this.ruta.snapshot.params['nombreAlumno'];
    this.getAlumnosPorNombre();
  }

  getAlumnosPorNombre() {
    this.OpAlumnoService.getAlumnosPorNombre(this.nombreAlumno).subscribe(
      (alumnosRecibidos) => {
        this.listaAlumnos = alumnosRecibidos;
        this.band = true;
      }
    );
  }
}
