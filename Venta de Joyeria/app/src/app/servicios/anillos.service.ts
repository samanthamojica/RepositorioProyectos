import { DebugElement, Injectable } from '@angular/core';
import { Anillo } from '../models/anillo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  anillo: Anillo;
  url = 'http://localhost:8080/anillos/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  saveImagenesEnBucket(file: FormData): Observable<Map<string, string>> {
    return this.http.post<Map<string, string>>('http://localhost:8080/imagenes/subirImagenes',  file );
  }

  saveAnilloBD(anillo: Anillo): Observable<boolean> {
    console.log("entro al metodo guardar anillo en BD");
    debugger
    return this.http.post<boolean>('http://localhost:8080/anillos/anillo/' , anillo);
  }
}
