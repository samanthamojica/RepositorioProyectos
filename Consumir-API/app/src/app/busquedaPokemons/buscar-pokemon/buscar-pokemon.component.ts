import { Component, Input } from '@angular/core';
import { ConsumirApiPokemoService } from 'src/app/services/consumir-api-pokemo.service';

@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css'],
})
export class BuscarPokemonComponent {
  @Input() nombrePokemon: string | undefined;
  //voy a recibir un valor que me va a mandar el componente padre

  inputBoton = document.getElementById('inputBoton') as HTMLInputElement;
  urlImagen1: string = '';
  urlImagen2: string = '';
  urlImagen3: string = '';
  movimientos: string[] = [];
  arregloTipo: string[] = [];
  arregloHabilidades: string[] = [];
  band = false;
  bandError: boolean = true;

  constructor(private consumirApiPokemoService: ConsumirApiPokemoService) {}

  ngOnInit(): void {
    this.buscarPokemon();
    this.consumirApiPokemoService.notifador.subscribe(
      (nombre: string | undefined) => {
        this.nombrePokemon = nombre;

        this.buscarPokemon();
      }
    );
  }

  buscarPokemon() {
    this.movimientos = [];
    this.arregloTipo = [];
    this.arregloHabilidades = [];
    if (this.nombrePokemon) {
      this.consumirApiPokemoService.getPokemon(this.nombrePokemon.toLowerCase()).subscribe((pokemon: any) => {
          let nombre = pokemon.name;
          this.nombrePokemon = nombre.charAt(0).toUpperCase() + nombre.slice(1);
          this.urlImagen1 = pokemon.sprites.other.home.front_default;
          this.urlImagen3 = pokemon.sprites.other.home.front_shiny;
          for (let i of pokemon.types) {
            this.arregloTipo.push(
              i.type.name.charAt(0).toUpperCase() + i.type.name.slice(1)
            );
          }
          for (let i of pokemon.abilities) {
            this.arregloHabilidades.push(
              i.ability.name.charAt(0).toUpperCase() + i.ability.name.slice(1)
            );
          }
          for (let i = 0; i < 5; i++) {
            this.movimientos.push(
              pokemon.moves[i].move.name.charAt(0).toUpperCase() +
                pokemon.moves[i].move.name.slice(1)
            );
          }
          this.band = true;
          this.inputBoton.value = '';
        });
        debugger
    } else {
           if (!this.band) {
        console.log('Ingrese un nombre valido');
        this.bandError = false;
      }
    }
  }
}
