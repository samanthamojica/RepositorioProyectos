import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animacion-giratoria',
  templateUrl: './animacion-giratoria.component.html',
  styleUrls: ['./animacion-giratoria.component.css']
})
export class AnimacionGiratoriaComponent {
 
  ngOnInit(): void {
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    const container = document.querySelector('.container');
    open?.addEventListener('click', ()=>container?.classList.add('show-nav'));
    close?.addEventListener('click', ()=>container?.classList.remove('show-nav'));
  }
  


}
