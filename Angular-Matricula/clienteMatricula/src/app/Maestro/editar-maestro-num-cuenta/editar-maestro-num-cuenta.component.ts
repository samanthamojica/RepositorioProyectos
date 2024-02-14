import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Maestro } from 'src/app/models/maestro';
import { Plaza } from 'src/app/models/plazas';
import { OpMaestroService } from 'src/app/services/op-maestro.service';

@Component({
  selector: 'app-editar-maestro-num-cuenta',
  templateUrl: './editar-maestro-num-cuenta.component.html',
  styleUrls: ['./editar-maestro-num-cuenta.component.css'],
})
export class EditarMaestroNumCuentaComponent {
  formularioMaestro: FormGroup;
  band: boolean;
  titulo: string = 'Editar Maestro';
  fechaHoy: Date = new Date();
  listaPlazas: Array<Plaza>;
  error: boolean;
  numCuenta: String;
  maestro: Maestro = new Maestro();

  constructor(
    private opMaestro: OpMaestroService,
    private ruta: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.numCuenta = this.ruta.snapshot.params['numCuenta'];
  }

  ngOnInit(): void {
    this.obtenerCuenta();
  }

  obtenerCuenta() {
    if (this.numCuenta == '') {
      this.error = true;
    } else {
      this.error = false;
      this.crearFormulario();
      this.obtenerMaestro();
      this.obtenerListaPlazas();
    }
  }

  obtenerListaPlazas() {
    this.opMaestro.getPlazas().subscribe((listaRecibida) => {
      this.listaPlazas = listaRecibida;
    });
  }

  obtenerMaestro() {
    this.opMaestro.getMaestro(this.numCuenta).subscribe((maestroR) => {
      this.maestro = maestroR;
      this.llenarFormulario();
    });
  }

  crearFormulario() {
    this.formularioMaestro = this.formBuilder.group({
      nombreMaestro: ['', Validators.required],
      apPaternoM: [''],
      apMaternoM: [''],
      fechaNacimientoM: ['', Validators.required],
      tipoPlaza: [''],
      emailM: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  llenarFormulario() {

    this.formularioMaestro.setValue({
      nombreMaestro: this.maestro.nombreMaestro,
      apPaternoM: this.maestro.apPaternoM,
      apMaternoM: this.maestro.apMaternoM,
      fechaNacimientoM: this.maestro.fechaNacimientoM,
      tipoPlaza: this.maestro.idTipoPlaza,
      emailM: this.maestro.emailM,
    });
  }

  editarMaestro() {
    (this.maestro.nombreMaestro = this.formularioMaestro.value.nombreMaestro),
      (this.maestro.apPaternoM = this.formularioMaestro.value.apPaternoM),
      (this.maestro.apMaternoM = this.formularioMaestro.value.apMaternoM),
      (this.maestro.fechaNacimientoM =
        this.formularioMaestro.value.fechaNacimientoM),
      (this.maestro.tipoPlaza = this.formularioMaestro.value.tipoPlaza),
      (this.maestro.emailM = this.formularioMaestro.value.emailM);
    this.opMaestro.editarMaestro(this.maestro).subscribe((r) => {
      if (r) {
        this.band = true;
      } else {
        this.band = false;
      }
    });

    this.formularioMaestro.reset();
  }
}
