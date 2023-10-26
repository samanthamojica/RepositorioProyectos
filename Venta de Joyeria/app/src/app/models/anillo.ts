export class Anillo {

  constructor(
    public idAnillo :string,
    public categoria: string,
    public nombreAnillo: string,
    public descripcion: string,
    public tipo:string,
    public precio: number,
    public coloresDisponibles: string,
    public urlImagen:string,
    public catalogoImagenes:string[],
    public cantidad: number
  ) {}
}
