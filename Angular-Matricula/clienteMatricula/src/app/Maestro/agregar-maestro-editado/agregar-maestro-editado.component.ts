import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Maestro } from 'src/app/models/maestro';
import { Plaza } from 'src/app/models/plazas';
import { OpMaestroService } from 'src/app/services/op-maestro.service';

@Component({
  selector: 'app-agregar-maestro-editado',
  templateUrl: './agregar-maestro-editado.component.html',
  styleUrls: ['./agregar-maestro-editado.component.css'],
})
export class AgregarMaestroEditadoComponent {
  formularioMaestro: FormGroup;
  fechaHoy: Date = new Date();
  maestro: Maestro = new Maestro();
  listaPlazas: Array<Plaza> = [];
  band: boolean;
 // numCuentaM: String;
  titulo: string;
 // esNuevo: boolean;
  maestroFormulario: Maestro = new Maestro();
  idTipoPlaza: number;
//  m: Maestro = new Maestro();
 // nC: string;

  constructor(
    private formBuilder: FormBuilder,
    private opMaestro: OpMaestroService,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.titulo = 'Editar Maestro';

    this.maestroFormulario = this.opMaestro.maestro;

    this.maestro.cuentaM = this.maestroFormulario.cuentaM;
    this.crearFormulario();
  }

  public crearFormulario() {
    this.getPlazas();
    this.formularioMaestro = this.formBuilder.group({
      nombreMaestro: [
        this.maestroFormulario.nombreMaestro,
        Validators.required,
      ],
      apPaternoM: [this.maestroFormulario.apPaternoM, Validators.required],
      apMaternoM: [this.maestroFormulario.apMaternoM, Validators.required],
      fechaNacimientoM: [
        this.maestroFormulario.fechaNacimientoM,
        Validators.required,
      ],
      emailM: [
        this.maestroFormulario.emailM,
        Validators.compose([Validators.required, Validators.email]),
      ],
      tipoPlaza: [this.maestroFormulario.idTipoPlaza, Validators.required],
    });
  }
  getPlazas() {
    this.opMaestro.getPlazas().subscribe((plazas) => {
      this.listaPlazas = plazas;
    });
  }

  editarMaestro() {
    (this.maestro.nombreMaestro = this.formularioMaestro.value.nombreMaestro),
      (this.maestro.apPaternoM = this.formularioMaestro.value.apPaternoM),
      (this.maestro.apMaternoM = this.formularioMaestro.value.apMaternoM),
      (this.maestro.fechaNacimientoM =
        this.formularioMaestro.value.fechaNacimientoM),
      (this.maestro.idTipoPlaza = this.formularioMaestro.value.tipoPlaza),
      (this.maestro.emailM = this.formularioMaestro.value.emailM);
    this.opMaestro.editarMaestro(this.maestro).subscribe((maestroRecibido) => {
      if (maestroRecibido) {
        this.band = true;
      } else {
        this.band = false;
      }
    });
    this.formularioMaestro.reset();
  }
}
