import { Pedido } from "../entities/Pedido.js";
import { CreatePedidoUseCase } from "../usecases/CreatePedidoUseCase.js";

export class PedidoController {
  constructor(repository) {
    this.repository = repository;
  }

  criarPedido = async (req, res) => {
    try {
      const { nome_cliente, mesa, pedido, total } = req.body;
      const novoPedido = new Pedido(nome_cliente, mesa, pedido, total);

      const createPedido = new CreatePedidoUseCase(this.repository);
      await createPedido.execute(novoPedido);

      res.status(201).json({ message: "Pedido registrado com sucesso!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  listarPedidos = async (req, res) => {
    try {
      const pedidos = await this.repository.listar();
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

//responsável por receber as requisições HTTP, interpretar os dados enviados pelo frontend e chamar o use case correto (a regra de negócio)
