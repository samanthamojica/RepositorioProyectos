export class Anillo {

  constructor(
    public idAnillo :string,
    public categoria: string,//
    public nombreAnillo: string,//
    public descripcion: string,//
    public tipo:string,
    public precio: number, // 
    public coloresDisponibles: string,
   // public catalogoImagenes:Blob[], // 
   public catalogoImagenes: FileList,
    public cantidad: number
  ) {}
}
