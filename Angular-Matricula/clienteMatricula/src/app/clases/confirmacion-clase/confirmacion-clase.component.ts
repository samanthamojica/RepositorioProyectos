import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { ClaseAlumnos } from 'src/app/models/claseAlumnos';
import { Horario } from 'src/app/models/horario';
import { OpClaseService } from 'src/app/services/op-clase.service';

@Component({
  selector: 'app-confirmacion-clase',
  templateUrl: './confirmacion-clase.component.html',
  styleUrls: ['./confirmacion-clase.component.css'],
})
export class ConfirmacionClaseComponent {
  idMateria: number;
  nombreMateria: string;
  idMaestro: string;
  nombreMaestro: string;
  dia: string = '';
  hora: string = '';
  t: number;
  listaHorario: Array<Horario> = [];
  listaAlumnos: Array<ClaseAlumnos> = [];
  band: boolean;
  disable:boolean= false;

  constructor(private opClaseService: OpClaseService) {}

  ngOnInit(): void {
    this.confirmarMateria();
    this.confirmarMaestro();
    this.confirmarHorario();
    this.confirmarAlumnos();
  }

  confirmarMateria() {
    this.idMateria = this.opClaseService.clase.idMateria;
    this.nombreMateria = this.opClaseService.clase.materia;
  }

  confirmarMaestro() {
    this.idMaestro = this.opClaseService.clase.idMaestro;
    this.nombreMaestro = this.opClaseService.clase.nombreMaestro;
  }

  confirmarHorario() {
    this.listaHorario = this.opClaseService.clase.horario;
  }

  confirmarAlumnos() {
    this.listaAlumnos = this.opClaseService.clase.listaAlumnos;
  }

  guardarClase() {
    this.opClaseService.guardarClase().subscribe((respuesta) => {
      this.band= respuesta;
      this.disable = true;
    });
  }
}
