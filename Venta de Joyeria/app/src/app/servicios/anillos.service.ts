import {  Injectable } from '@angular/core';
import { Anillo } from '../models/anillo';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnilloRequest } from '../models/anillo-request';


@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  anillo: Anillo;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  saveImagenesEnBucket(file: FormData): Observable<Map<string, string>> {
    return this.http.post<Map<string, string>>( 'http://localhost:8080/imagenes/subirImagenes',  file );
  }

  saveAnilloBD(anillo: Anillo): Observable<boolean> {
       return this.http.post<boolean>( 'http://localhost:8080/anillos/anillo/',   anillo );
  }

  getAnillos(): Observable<AnilloRequest[]>{
    return this.http.get<AnilloRequest[]>('http://localhost:8080/anillos/obtenerAnillos');
  }

}
