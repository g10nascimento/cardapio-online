import { IPedidoRepository } from "./IPedidoRepository.js";

export class PedidoRepositoryInMemory extends IPedidoRepository {
  constructor() {
    super();
    this.pedidos = [];
  }

  async salvar(pedido) {
    this.pedidos.push(pedido);
  }

  async listar() {
    return this.pedidos;
  }
}
