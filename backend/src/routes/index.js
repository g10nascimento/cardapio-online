import express from "express";
import { PedidoController } from "../controllers/PedidoController.js";
import { PedidoRepositoryInMemory } from "../repositories/PedidoRepositoryInMemory.js";
import { PedidoRepositorySupabase } from "../repositories/PedidoRepositorySupabase.js";

const router = express.Router();

const memoriaRepo = new PedidoRepositoryInMemory();
const supabaseRepo = new PedidoRepositorySupabase();

const pedidoControllerMemoria = new PedidoController(memoriaRepo);
const pedidoControllerSupabase = new PedidoController(supabaseRepo);

router.post("/pedido", pedidoControllerMemoria.criarPedido);
router.post("/pedido/salvar", pedidoControllerSupabase.criarPedido);
router.get("/cozinha", pedidoControllerMemoria.listarPedidos);
router.get("/historico", pedidoControllerSupabase.listarPedidos);

export default router;

//responsável por definir as rotas da API relacionadas aos pedidos do sistema