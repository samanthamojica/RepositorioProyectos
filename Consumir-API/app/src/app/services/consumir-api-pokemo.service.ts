import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiPokemoService {
  public notifador: Subject<string | undefined> = new Subject<
    string | undefined
  >();
  nombresPokemons: string[] = [];

  url = ' https://pokeapi.co/api/v2/pokemon/';
  url2 = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  resultado: any;
  resultado2: any;

  constructor(private http: HttpClient) {}

  getPokemon(nombre: string): Observable<object> {
    this.resultado = this.http.get(this.url + nombre);
    return this.resultado;
  }
}
