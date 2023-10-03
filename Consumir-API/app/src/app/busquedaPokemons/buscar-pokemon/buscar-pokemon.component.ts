import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumirApiPokemoService } from 'src/app/services/consumir-api-pokemo.service';

@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css'],
})
export class BuscarPokemonComponent {
  inputBoton = document.getElementById('inputBoton') as HTMLInputElement;
  urlImagen1: string = '';
  urlImagen2: string = '';
  urlImagen3: string = '';
  movimientos: string[] = [];
  arregloTipo: string[] = [];
  arregloHabilidades: string[] = [];
  nombrePokemon: string = 'Charmander';
  band = false;

  constructor(private consumirApiPokemoService: ConsumirApiPokemoService,
              private ruta: ActivatedRoute
  ) {}

  buscarPokemon() {
    this.movimientos = [];
    this.arregloTipo = [];
    this.arregloHabilidades = [];
    this.consumirApiPokemoService
      .getPokemon(this.nombrePokemon.toLowerCase())
      .subscribe((pokemon: any) => {
        this.nombrePokemon = pokemon.name;
        this.urlImagen1 = pokemon.sprites.other.home.front_default;
        this.urlImagen3 = pokemon.sprites.other.home.front_shiny;
        for (let i of pokemon.types) {
          this.arregloTipo.push(i.type.name);
        }
        for (let i of pokemon.abilities) {
          this.arregloHabilidades.push(i.ability.name);
        }
        for (let i = 0; i < 5; i++) {
          this.movimientos.push(pokemon.moves[i].move.name);
        }
        this.band = true;
        this.inputBoton.value = '';
        debugger;
      });
  }
}
