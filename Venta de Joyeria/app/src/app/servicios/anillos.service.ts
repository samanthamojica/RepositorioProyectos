import { Injectable } from '@angular/core';
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

   guardarAnillo(file: FormData): Observable<Map<string, string>>{
    debugger
    console.log("entro al servicio");
    return this.http.post<Map<string, string>>('http://localhost:8080/imagenes/subirImagenes' , file);
    
   
  }
}
