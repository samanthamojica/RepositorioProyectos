import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso.model';
import { IngresosService } from '../Ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit{

ingresos:Ingreso[]=[];

  constructor(private ingresosService:IngresosService) { }
 
//hasta aqui ya tengo el servicio de ingresos
//ahora quiero inicializar mi variable para poder usar los valores.
ngOnInit(): void {
  this.ingresos=this.ingresosService.ingresos;
 }

 elimIng(ingreso: Ingreso){
this.ingresosService.eliminarIngreso(ingreso);


 }



}
