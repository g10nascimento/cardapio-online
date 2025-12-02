export class CreatePedidoUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(pedido) {
    if (!pedido.nome_cliente || !pedido.mesa || !pedido.pedido) {
      throw new Error("Dados inválidos");
    }
    await this.repository.salvar(pedido);
  }
}
//responsável por executar a lógica principal para criar um pedido, antes de enviá-lo para o repositório.