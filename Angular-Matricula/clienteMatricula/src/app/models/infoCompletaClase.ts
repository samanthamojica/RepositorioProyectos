import { Alumno } from "./alumno";
import { Maestro } from "./maestro";

export class infoCompletaClase{
    public  idClase: number;
	public  idMaestro: number;
	public  idMateria: number;
	public  nombreMateria : string;
	public  horaDia : string
	public  horaHora: string;
	public maestro: Maestro;
	public  listaAlumnos : Array<Alumno>
}