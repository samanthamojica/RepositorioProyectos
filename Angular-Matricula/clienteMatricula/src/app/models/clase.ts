import { ClaseAlumnos } from './claseAlumnos';
import { Horario } from './horario';

export class Clase {

  public idClase: number;
  public idMateria: number;
  public materia: string;
  public idMaestro: string;
  public nombreMaestro: string;
  public apPaterno:string;
  public apMaterno: string;
  public horario: Horario[];
  public hora: string;
  public dia: string;
  public listaAlumnos: ClaseAlumnos[];

  constructor() {
    
    this.idClase = this.idClase;
    this.idMateria = this.idMateria;
    this.materia = this.materia;
    this.idMaestro = this.idMaestro;
    this.nombreMaestro = this.nombreMaestro;
    this.horario = this.horario;
    this.listaAlumnos = this.listaAlumnos;
   this.hora = this.hora;
    this.dia = this.dia;

  }

}
