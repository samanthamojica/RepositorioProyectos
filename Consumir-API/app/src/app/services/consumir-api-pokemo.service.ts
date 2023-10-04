import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiPokemoService {
  public notifador : Subject<string | undefined> = new Subject<string | undefined>();
  
  url = ' https://pokeapi.co/api/v2/pokemon/';
 
  constructor(private http: HttpClient) {}

 getPokemon(nombre: string) {
    return this.http.get(this.url + nombre);
  } 
}
