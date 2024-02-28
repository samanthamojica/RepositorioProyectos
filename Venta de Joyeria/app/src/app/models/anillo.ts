export class Anillo {
  constructor(
    public idAnillo: string,
    public idCategoria: number,
    public nombreAnillo: string,
    public descripcion: string,
    public tipo: string,
    public precio: number,
    public coloresDisponibles: string,
    public catalogoImagenes: Map<string, string>,
    public cantidad: number
  ) {}
}
