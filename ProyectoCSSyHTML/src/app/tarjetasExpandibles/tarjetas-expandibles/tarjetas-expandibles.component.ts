import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas-expandibles',
  templateUrl: './tarjetas-expandibles.component.html',
  styleUrls: ['./tarjetas-expandibles.component.css'],
})
export class TarjetasExpandiblesComponent {
  ngOnInit(): void {
    let paneles = document.querySelectorAll('.panel');
    paneles.forEach((panel) => {
      panel.addEventListener('click', () => {
        desactivarPanel();
        panel.classList.add('active');
      });
    });

    function desactivarPanel() {
      paneles.forEach((panel) => {
        panel.classList.remove('active');
      });
    }
  }
}
