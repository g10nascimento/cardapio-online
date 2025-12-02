export class Pedido {
  constructor(nome_cliente, mesa, pedido, total) {
    this.nome_cliente = nome_cliente;
    this.mesa = mesa;
    this.pedido = pedido;
    this.total = total;
    this.data_hora = new Date();
  }
}
