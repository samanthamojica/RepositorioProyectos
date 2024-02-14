import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs/internal/Observable';


@Injectable(/* {
  providedIn: 'root',
} */)

export class OpAlumnoService {
  private url: string = 'http://localhost:8080/alumnos';
  alumno: Alumno;

  constructor(private http: HttpClient) {}

  getAlumno(numCuenta: String): Observable<Alumno> {
    return this.http.get<Alumno>(this.url + '/alumno/' + numCuenta);
  }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>('http://localhost:8080/alumnos/alumnos');
  }

  guardarAlumno(a: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>('http://localhost:8080/alumnos/alumno/', a);
  }

  eliminarAlumno(numCuentaA: String): Observable<boolean> {
    return this.http.delete<boolean>(
      'http://localhost:8080/alumnos/alumno/' + numCuentaA
    );
  }

  editarAlumno(alumno: Alumno): Observable<boolean> {
    return this.http.put<boolean>( 'http://localhost:8080/alumnos/alumno/',  alumno);
  }


  getAlumnosPorNombre(nombre:string):Observable<Alumno[]>{
    return this.http.get<Alumno[]>('http://localhost:8080/alumnos/alumnos/'+ nombre);
  }


 
}
