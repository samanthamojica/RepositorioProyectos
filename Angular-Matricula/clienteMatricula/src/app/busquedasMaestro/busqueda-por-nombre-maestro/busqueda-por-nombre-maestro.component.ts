import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Horario } from 'src/app/models/horario';
import { OpClaseService } from '../../services/op-clase.service';
import { Maestro } from 'src/app/models/maestro';
import { OpMaestroService } from '../../services/op-maestro.service';

@Component({
  selector: 'app-busqueda-por-nombre-maestro',
  templateUrl: './busqueda-por-nombre-maestro.component.html',
  styleUrls: ['./busqueda-por-nombre-maestro.component.css'],
})
export class BusquedaPorNombreMaestroComponent {
  nombreMaestro: string;
  horarioLunes: Horario[] = [];
  horarioMartes: Horario[] = [];
  horarioMiercoles: Horario[] = [];
  horarioJueves: Horario[] = [];
  horarioViernes: Horario[] = [];
  horarioSabado: Horario[] = [];
  maestro: Maestro = new Maestro();
  listaMaestros:Maestro[] = [];
  numeroCuenta:string;
  band :boolean = false;

  constructor(
    private ruta: ActivatedRoute,
    private opClaseService: OpClaseService,
    private opMaestroService: OpMaestroService
  ) {}

  ngOnInit(): void {
    this.nombreMaestro = this.ruta.snapshot.params['nombreMaestro'];
    this.getMaestro();
  }

  getMaestro() {
    this.opMaestroService.getMaestrosPorNombre(this.nombreMaestro).subscribe((maestroR) => {
          this.listaMaestros = maestroR;
          this.band = true;
      });
  }
}
