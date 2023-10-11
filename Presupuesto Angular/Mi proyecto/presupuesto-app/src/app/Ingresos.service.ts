import { Ingreso } from './ingreso.model';
import { IngresosComponent } from './ingresos/ingresos.component';

export class IngresosService{

    ingresos: Ingreso[]=[
        new Ingreso('Venta Laptop',100),
        new Ingreso('Tanda',200),
        new Ingreso('Venta Ropa',500),
        new Ingreso('Sueldo' , 20000)
    ];
   // metodo para agregar persona, minuto 2, tema 45
    
   agregarIngreso(ingreso1: Ingreso){
        this.ingresos.push(ingreso1);
        /* console.log(ingreso1); */
         } 
    
    eliminarIngreso(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso)
        this.ingresos.splice(indice,1);
    }
}