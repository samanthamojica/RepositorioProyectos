import { Component, Input } from '@angular/core';
import { ConsumirApiPokemoService } from './services/consumir-api-pokemo.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faSearch = faSearch;
  urlImagen1: string = '';
  urlImagen2: string = '';
  urlImagen3: string = '';
  movimientos: string[] = [];
  arregloTipo: string[] = [];
  arregloHabilidades: string[] = [];
  nombrePokemon: string = '';
  band = false;
  inputBoton = document.getElementById('inputBoton') as HTMLInputElement;
  

  constructor(private consumirApiPokemoService: ConsumirApiPokemoService) {}

  ngOnInit(): void {
    
    let search = document.querySelector('.search');
    var input = document.querySelector('.input') as HTMLElement;
    let btn = document.querySelector('.btn');

    btn?.addEventListener('click', () => {     
      search?.classList.toggle('actived');
      input?.focus();
    });
  }

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
        debugger
      
       
        
      });
  } 
}
