import { Clase } from "./clase";

export class ClasePorHora { 
    
   hora:string;
   clase : Clase[]; 
   horarios: Clase[] = [];  

   constructor(hora: string){
    this.hora = hora    
  }

}
