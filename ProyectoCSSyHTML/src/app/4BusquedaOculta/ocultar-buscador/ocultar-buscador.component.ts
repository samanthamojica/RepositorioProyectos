import { Component, ViewEncapsulation } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ocultar-buscador',
  templateUrl: './ocultar-buscador.component.html',
  styleUrls: ['./ocultar-buscador.component.css']
})
export class OcultarBuscadorComponent {
  faSearch = faSearch;
  ngOnInit(): void {   
    let search= document.querySelector('.search');
    let input = document.querySelector('.input') as HTMLElement;
    let btn = document.querySelector('.btn');
  
    btn?.addEventListener('click', ()=>{
      search?.classList.toggle('actived')
      input?.focus();
    })

  }


}