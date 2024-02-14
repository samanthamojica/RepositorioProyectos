import { Component, DebugElement } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Open } from 'webpack-dev-server';
import { Maestro } from '../models/maestro';
import { OpMaestroService } from '../services/op-maestro.service';
import { Plaza } from '../models/plazas';
import { disableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-maestro',
  templateUrl: './agregar-maestro.component.html',
  styleUrls: ['./agregar-maestro.component.css'],
})
export class AgregarMaestroComponent {
  formularioMaestro: FormGroup;
  fechaHoy: Date = new Date();
  maestro: Maestro = new Maestro();
  listaPlazas: Array<Plaza> = [];
  nombrePlaza: String = '';
  band: boolean;
  numCuentaM: String;
  titulo: string;
  esNuevo: boolean;
  maestroFormulario: Maestro = new Maestro();
  value = 0;


  constructor(
    private formBuilder: FormBuilder,
    private opMaestro: OpMaestroService
  ) 
  {}

  ngOnInit(): void {
    this.crearFormulario();
   
    this.titulo = 'Registro de nuevo Maestro';

    this.getPlazas();
    this.value = 3;
  }

  public crearFormulario() {
    this.formularioMaestro = this.formBuilder.group({
      nombreMaestro: ['', Validators.required],
      apPaternoM: ['', Validators.required],
      apMaternoM: ['', Validators.required],
      fechaNacimientoM: ['', Validators.required],
      emailM: ['', Validators.compose([Validators.required, Validators.email])],
      tipoPlaza: ['', Validators.required],
    });
  }

  agregarMaestro() {
    this.maestro = this.formularioMaestro.value as Maestro;
    this.opMaestro.agregarMaestro(this.maestro).subscribe((maestroAgreado) => {
      this.maestro = maestroAgreado;
      console.log('Maestro agregado');
      if (this.maestro.cuentaM == null) {
        this.band = false;
      } else {
        this.band = true;
        this.numCuentaM = this.maestro.cuentaM;
      }
    });
    this.formularioMaestro.reset();
  }

  getPlazas() {
    this.opMaestro.getPlazas().subscribe((plazas) => {
      this.listaPlazas = plazas;
    });
  }
}
