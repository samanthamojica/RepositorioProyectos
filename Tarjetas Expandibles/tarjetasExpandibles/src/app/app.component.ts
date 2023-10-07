import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
