import { Clase } from "./clase";
import { Horario } from "./horario";

export class ClasesPorHoraMaestro{
    hora:string;
    clase : Clase[]; 
    horarios: Horario[] = [];  

    constructor(hora: string){
        this.hora = hora    
      }
}