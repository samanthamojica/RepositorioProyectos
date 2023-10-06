import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ConsumirApiPokemoService } from './services/consumir-api-pokemo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  faSearch = faSearch;
  nombre: string = '';
  clic: boolean = false;
  keyword = 'nombre';
  nombrePokemon: string | undefined;
  arregloPokemons: any; //hay que cambiar este tipo

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

  navegarToBuscarPokemon() {
    if (this.clic) {
      this.nombrePokemon = this.nombre;
      this.nombre = '';
    }
    this.clic = true;
    this.arregloPokemons = this.consumirApiPokemoService.nombresPokemons;
    this.consumirApiPokemoService.notifador.next(this.nombrePokemon);
  }


}
