import { Component, EventEmitter, Output } from '@angular/core';
import { BusquedaPorIdComponent } from '../busqueda-por-id/busqueda-por-id.component';
import { Router } from '@angular/router';
import { devOnlyGuardedExpression } from '@angular/compiler';

@Component({
  selector: 'app-pag-principal-busquedas',
  templateUrl: './pag-principal-busquedas.component.html',
  styleUrls: ['./pag-principal-busquedas.component.css'],
})
export class PagPrincipalBusquedasComponent {
  id: string;
  nombreAlumno:string;
 
}
