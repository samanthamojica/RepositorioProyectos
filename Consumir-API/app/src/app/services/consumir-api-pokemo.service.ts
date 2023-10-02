import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiPokemoService {
  url = ' https://pokeapi.co/api/v2/pokemon/';
 
  constructor(private http: HttpClient) {}

 getPokemon(nombre: string) {
    return this.http.get(this.url + nombre);
  } 
}
