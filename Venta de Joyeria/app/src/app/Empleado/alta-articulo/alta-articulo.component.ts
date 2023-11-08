import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anillo } from 'src/app/models/anillo';
import { AnillosService } from '../../servicios/anillos.service';

@Component({
  selector: 'app-alta-articulo',
  templateUrl: './alta-articulo.component.html',
  styleUrls: ['./alta-articulo.component.css'],
})
export class AltaArticuloComponent {
  fomularioAlta: FormGroup;
  nuevoAnillo: Anillo;
  band : boolean;

  constructor(
    private formBuilder: FormBuilder,
    private anillosService: AnillosService
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.fomularioAlta = this.formBuilder.group({
      nombreAnillo: [''],
      descripcion: [''],
      categoria: [''],
      precio: [''],
    });
  }

  async agragarAnillo() {
    this.nuevoAnillo = this.fomularioAlta.value as Anillo;
  
    try {
      let resultado = await this.anillosService.guardarAnillo(this.nuevoAnillo);
      debugger
      console.log(' Se guardo anillo');
      console.log('respuesta de servidor: ' + resultado);
      this.band = true;
      this.fomularioAlta.reset();
    } catch(error) {
      debugger
      console.log("No se guardo el anillo");
      console.log("respuesta del servidor: "+ error);
      this.band = false;
    }
  }
}
