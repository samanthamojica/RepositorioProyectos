import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../gastos.model';
import { GastosService } from '../gastos.service';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  gasto: Gasto[];
  conceptoEli;
  montoEli;
  i;
  ingreso: Ingreso[];
  @Input() ingresoTotal: number;

  constructor(private gastosService: GastosService) {}

  ngOnInit(): void {
    this.gasto = this.gastosService.gastos;
  }

  eliminarG(gasto: Gasto) {
    this.gastosService.eliminarGasto(gasto);
  }

  calcularProcentaje(gasto: Gasto) {
    return gasto.montoG / this.ingresoTotal;
  }
}
