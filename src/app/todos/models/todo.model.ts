export class Todo {
  public id: number;
  public idCategoria: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string, idCategoria: number) {
    this.texto = texto;
    this.idCategoria = idCategoria;
    this.id = Math.random();
    this.completado = false;
  }
}
