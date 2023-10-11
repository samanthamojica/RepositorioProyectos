import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { Ingreso } from '../ingreso.model';
import { IngresosService } from '../Ingresos.service';
import { Gasto } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  ingresos: Ingreso[];

  conceptoI: String;
  conceptoG: String;
  montoI: number;
  montoG: number;

  valor;
  ing: string;
  egr: string;
  constructor(
    private ingresosService: IngresosService,
    private gastosSevice: GastosService
  ) {}

  ngOnInit(): void {}

  agregarmonto() {
    if (this.valor == 'ing') {
      this.agregarI();
    } else {
      this. agregarG();
    }
  }

  agregarI() {
    let ingreso1 = new Ingreso(this.conceptoI, this.montoI);
    this.ingresosService.ingresos.push(ingreso1);
  }

  agregarG() {
    let gasto1 = new Gasto(this.conceptoG, this.montoG);
    this.gastosSevice.agregarGasto(gasto1);
  /*   console.log('valor: ' + this.valor);
    console.log('tipo de valor:  ' + typeof this.valor); */
  }
}
