
import { Gasto } from "./gastos.model"

export class GastosService{
    
    gastos: Gasto[]=[
        new Gasto('Comida',50),
        new Gasto('Cafe',80),
        new Gasto('Renta',1000)
    ]
    
    agregarGasto(gasto1:Gasto){
        this.gastos.push(gasto1);
        console.log(this.gastos)
    }

    eliminarGasto(gasto1:Gasto){
        const indice:number= this.gastos.indexOf(gasto1);
        this.gastos.splice(indice,1);
    }

}