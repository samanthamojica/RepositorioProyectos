import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Maestro } from '../models/maestro';
import { Plaza } from '../models/plazas';

@Injectable({
  providedIn: 'root',
})
export class OpMaestroService {
  
  constructor(private http: HttpClient) {}

  maestro: Maestro;

  ngOnInit(): void {}

  agregarMaestro(maestro: Maestro): Observable<Maestro> {
    return this.http.post<Maestro>('http://localhost:8080/maestros/maestro',  maestro);
  }

  getPlazas(): Observable<Plaza[]> {
    return this.http.get<Plaza[]>('http://localhost:8080/maestros/plazas');
  }

  getIdPlaza(tipoPlaza: string): Observable<string> {
    return this.http.get<string>('http://localhost:8080/maestros/plaza');
  }

  getMaestros(): Observable<Maestro[]> {
    return this.http.get<Maestro[]>('http://localhost:8080/maestros/maestros');
  }

  deleteMaestro(numCuenta: String): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:8080/maestros/maestro/' + numCuenta
    );
  }

  getMaestro(numCuenta: String): Observable<Maestro> {
      return this.http.get<Maestro>('http://localhost:8080/maestros/maestro/' + numCuenta
    );
  }

  editarMaestro(maestro: Maestro): Observable<boolean> {
    return this.http.put<boolean>('http://localhost:8080/maestros/maestro/', maestro);
  }

  getMaestrosPorNombre(nombre: string): Observable<Maestro[]> {
    return this.http.get<Maestro[]>('http://localhost:8080/maestros/maestros/'+nombre);
  }


}
