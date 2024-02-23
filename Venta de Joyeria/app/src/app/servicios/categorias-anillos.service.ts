import { Injectable } from '@angular/core';
import { CategoriasAnillos } from '../models/categorias-anillos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasAnillosService {

  constructor(private http: HttpClient) {}

  obtenerCategoriasAnillos(): Observable<CategoriasAnillos[]> {
   const r =  this.http.get<CategoriasAnillos[]>('http://localhost:8080/catalogoAnillos/obtenerCategorias');     
   console.log(r);
   debugger
   return r;
  }
}
