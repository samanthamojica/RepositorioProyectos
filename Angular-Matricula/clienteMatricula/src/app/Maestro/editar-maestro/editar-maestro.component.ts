import { Component } from '@angular/core';
import { Maestro } from 'src/app/models/maestro';
import { OpMaestroService } from 'src/app/services/op-maestro.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-editar-maestro',
  templateUrl: './editar-maestro.component.html',
  styleUrls: ['./editar-maestro.component.css'],
})
export class EditarMaestroComponent {
  listaMaestros: Array<Maestro> = [];
  numCuenta:string;

  constructor(
    private opMaestroService: OpMaestroService,
  private ruta: Router
  ) {}

  ngOnInit(): void {
    this.getMaestros();
  }

  getMaestros() {
    this.opMaestroService.getMaestros().subscribe((maestrosRecibidos) => {
      this.listaMaestros = maestrosRecibidos;
    });
  }
 
  editarMaestro(maestro: Maestro) {
     this.opMaestroService.maestro = maestro;
    this.ruta.navigateByUrl('almacenar-maestrosEditado');
  }
}
