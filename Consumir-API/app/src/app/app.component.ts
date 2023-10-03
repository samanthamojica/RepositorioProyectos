import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faSearch = faSearch;
  nombrePokemon: string = 'Charmander';
   clic:boolean = false;
 
  

  constructor( private router:Router) {}

  ngOnInit(): void {

    let search = document.querySelector('.search');
    var input = document.querySelector('.input') as HTMLElement;
    let btn = document.querySelector('.btn');

    btn?.addEventListener('click', () => {
      search?.classList.toggle('actived');
      input?.focus();
    });
  }

  navegarToBuscarPokemon(){
    
    
    if(this.clic){
      console.log('Entro a buscar Pokemon');
      this.router.navigate(['/buscarPokemons']);
      debugger
    }
    this.clic = true;
    
  }
}
