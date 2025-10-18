export class Categoria {
  public id: number;
  public texto: string;
  public icono: string;
  public color: string;

  constructor(texto: string, color: string, id?: number) {
    this.texto = texto;
    this.id = id || Math.random();
    this.icono = '';
    this.color = color;
  }
}
