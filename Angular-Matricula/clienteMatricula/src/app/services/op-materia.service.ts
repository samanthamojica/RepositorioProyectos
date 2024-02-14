import { HttpClient } from '@angular/common/http';
import { Injectable, DebugElement } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia';
import { Horario } from '../models/horario';

@Injectable({
  providedIn: 'root',
})
export class OpMateriaService {
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  agregarMateria(materia: Materia): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/materias/materia/',
      materia
    );
  }
  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>('http://localhost:8080/materias/materias');
  }

  getMateriasPorAlumno(numeroCuenta: string): Observable<Horario[]> {
    return this.http.get<Horario[]>('http://localhost:8080/clases/clase/' + numeroCuenta
    );
  }

  getMateriasPorNombre(nombreMateria: string): Observable<Materia[]> {
       return this.http.get<Materia[]>('http://localhost:8080/materias/materia/' + nombreMateria
    );
  }
}
