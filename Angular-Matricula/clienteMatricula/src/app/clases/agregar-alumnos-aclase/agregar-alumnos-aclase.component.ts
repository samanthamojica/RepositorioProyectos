import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { OpAlumnoService } from 'src/app/services/op-alumno.service';
import { OpClaseService } from '../../services/op-clase.service';
import { ClaseAlumnos } from 'src/app/models/claseAlumnos';
import { Clase } from 'src/app/models/clase';

@Component({
  selector: 'app-agregar-alumnos-aclase',
  templateUrl: './agregar-alumnos-aclase.component.html',
  styleUrls: ['./agregar-alumnos-aclase.component.css'],
})
export class AgregarAlumnosAClaseComponent {
  listaAlumnos: Array<Alumno> = [];
  listaAlumnosGuardar: Array<ClaseAlumnos> = [];
  // lista: Array<ClaseAlumnos >
  //alumno: Alumno;
  band: boolean;
  alumno: ClaseAlumnos;

  // alumnos: any;
  //  checkboxStatus: boolean;

  constructor(
    private opAlumnoService: OpAlumnoService,
    private opClaseService: OpClaseService
  ) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.opAlumnoService
      .getAlumnos()
      .subscribe((alumnosRecibidos) => (this.listaAlumnos = alumnosRecibidos));
    for (let i = 0; i < this.listaAlumnos.length; i++) {
      this.listaAlumnos[i].statusAlumno = false;
    }
  }

  agregarAlumnos() {
    for (let i = 0; i < this.listaAlumnos.length; i++) {
      if (this.listaAlumnos[i].statusAlumno) {
  
        this.alumno = new ClaseAlumnos();
        this.alumno.numCuentaA = this.listaAlumnos[i].numCuentaA;
        this.alumno.nombreAlumno = this.listaAlumnos[i].nombreAlumno;
        this.alumno.apPaternoA = this.listaAlumnos[i].apPaternoA;
        this.alumno.apMaternoA = this.listaAlumnos[i].apMaternoA;
        this.listaAlumnosGuardar.push(this.alumno);
    }
    this.band = this.opClaseService.agregarAlumnos(this.listaAlumnosGuardar);
  }
}
}