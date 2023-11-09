import { Injectable } from '@angular/core';
import { Anillo } from '../models/anillo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  anillo: Anillo;
  url = 'http://localhost:8080/anillos/';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  /* guardarAnillo(anillo: Anillo): Observable<Anillo> {
    return this.http.post<Anillo>(this.url + 'anillo/', anillo);
  } */

  guardarAnillo(anillo: Anillo): Promise<Anillo> {
    return this.http
      .post<Anillo>(this.url + 'anillo/', anillo)
      .toPromise()
      .then((data) => {
        return data;
      })
      .catch((error) => {
        /*   console.log('error en el servidor' + error); */
        throw error;
      });
  }
}
