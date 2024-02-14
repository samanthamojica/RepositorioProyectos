import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-principal',
  templateUrl: './busqueda-principal.component.html',
  styleUrls: ['./busqueda-principal.component.css'],
})
export class BusquedaPrincipalComponent {
  idAlumno: string = '';
  idMaestro: string = '';
  myForm: FormGroup;
  band: boolean = false;

  constructor(private router: Router) {
    this.myForm = new FormGroup({
      inputGral: new FormControl('', [Validators.required, Validators.pattern(/^M\d{9}$/), ]),
    });
  }

  ngOnInit(): void {}

  validarAngNavigate() {

    if (this.myForm.valid) {
          this.router.navigate([
        'busqueda-clase/busqueda-maestro-id/',
        this.idMaestro,
      ]);
    } else {
      this.band = true;
    }
  }
}
