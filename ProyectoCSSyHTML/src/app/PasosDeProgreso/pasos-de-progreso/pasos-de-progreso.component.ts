import { Component } from '@angular/core';

@Component({
  selector: 'app-pasos-de-progreso',
  templateUrl: './pasos-de-progreso.component.html',
  styleUrls: ['./pasos-de-progreso.component.css'],
})
export class PasosDeProgresoComponent {
 /*  ngOnInit(): void {
    let circles = document.querySelectorAll('.circle');
    let progress: HTMLElement | null = document.getElementById('progress');
    let prev = document.getElementById('prev') as HTMLButtonElement;
    let next = document.getElementById('next') as HTMLButtonElement;
    let currentActive = 1;

    next.addEventListener('click', () => {
      currentActive++;
      if (currentActive > circles.length) {
        currentActive = circles.length;
      }
      update();
    });

    prev.addEventListener('click', () => {
      currentActive--;
      if (currentActive < 1) {
        currentActive = 1;
      }
      update();
    });

    function update() {
      circles.forEach((circle, idx) => {
        if (idx < currentActive) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      });
    }

    const actives = document.querySelectorAll('.active');

    if (progress) {
      progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    }

    if (currentActive === 1) {
      if (prev !== null) {
        prev.disabled = true;
      }
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  } */

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  const progress = document.getElementById('progress')
const prev = document.getElementById('prev')as HTMLButtonElement
const next = document.getElementById('next') as HTMLButtonElement;
const circles = document.querySelectorAll('.circle') ;

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    if (progress) {
      progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    }
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
}

}
