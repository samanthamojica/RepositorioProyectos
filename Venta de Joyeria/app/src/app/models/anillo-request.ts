import { CategoriasAnillos } from "./categorias-anillos";

export class AnilloRequest {
    public  id:  number;
	public  precio: number;
	public  idCategoria: number;
	public  descripcion: string;
	public  idAnillo :string ;
	public  nombreAnillo : string ;
	public  idCatalogo : number ;
	public catalogoImagenes : Map<string, string>;
	public imagenMuestra: string;

}
