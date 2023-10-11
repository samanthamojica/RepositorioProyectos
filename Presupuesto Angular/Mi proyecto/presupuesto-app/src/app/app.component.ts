import { Component } from '@angular/core';
import { Gasto } from './gastos.model';
import { Ingreso } from './ingreso.model';
import { IngresosService } from './Ingresos.service';
import { GastosService } from './gastos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  gastos: Gasto[] = [];

  constructor(
    private ingresoService: IngresosService,
    private gastosService: GastosService
  ) {
          this.ingresos=ingresoService.ingresos;
          this.gastos=gastosService.gastos;
  }

getIngresoTotal(){
  let ingTotal = 0;

  console.log(this.ingresos);
  this.ingresos.forEach(
    function(ingreso){
      (ingTotal +=ingreso.monto )
      })
  
  return ingTotal;
}

getGastos(){
  let gastoTotal:number=0;
  this.gastos.forEach(gastos=> {gastoTotal += gastos.montoG})
  return gastoTotal;
}

getPreTotal(){
return this.  getIngresoTotal()-this.getGastos();
}

getPorcentajeTotal(){
  return this.getGastos() / this.getIngresoTotal();
}





}
