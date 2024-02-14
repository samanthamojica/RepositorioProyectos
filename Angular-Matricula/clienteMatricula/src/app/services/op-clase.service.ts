import { Injectable } from '@angular/core';
import { Clase } from '../models/clase';
import { Horario } from '../models/horario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClaseAlumnos } from '../models/claseAlumnos';
import { Materia } from '../models/materia';
import { infoCompletaClase } from '../models/infoCompletaClase';

@Injectable({
  providedIn: 'root',
})
export class OpClaseService {
  clase: Clase = new Clase();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  agregarMateriaAClase(idMateria: number, nombreMateria: string): boolean {
    this.clase.idMateria = idMateria;
    this.clase.materia = nombreMateria;
    if (this.clase.idMateria != null && this.clase.materia != '') {
      return true;
    } else {
      return false;
    }
  }

  agregarMaestroAClase(idMaestro: string, nombreMaestro: string): boolean {
    this.clase.idMaestro = idMaestro;
    this.clase.nombreMaestro = nombreMaestro;
    if (this.clase.idMaestro != null && this.clase.nombreMaestro != '') {
      return true;
    } else {
      return false;
    }
  }

  agregarHorario(listaHorario: Array<Horario>): boolean {
    this.clase.horario = listaHorario;
    if (listaHorario.length != 0) {
      return true;
    } else {
      return false;
    }
  }

  agregarAlumnos(listaAlumno: Array<ClaseAlumnos>): boolean {
    this.clase.listaAlumnos = listaAlumno;
    if (this.clase.listaAlumnos.length != null) {
      return true;
    } else {
      return false;
    }
  }

  guardarClase(): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/clases/clase',this.clase );
  }

  getClasePorMaestro(numeroCuenta: string): Observable<Horario[]> {
    return this.http.get<Horario[]>('http://localhost:8080/clases/clases/' + numeroCuenta );
  }

  getClasesPorMateria(idMateria: number): Observable<Materia[]> {
    return this.http.get<Materia[]>(
      'http://localhost:8080/clases/materia/' + idMateria
    );
  }

  getClases(idCuenta:string): Observable<Clase[]> {
    return this.http.get<Clase[]>('http://localhost:8080/clases/clases/idAlumno/'+ idCuenta);
  }

  getClase(idClase: number): Observable<infoCompletaClase>{
    return this.http.get<infoCompletaClase>('http://localhost:8080/clases/clase/idClase/'+ idClase);
  }
}
