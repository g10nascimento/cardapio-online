import { IPedidoRepository } from "./IPedidoRepository.js";
import supabase from "../services/SupabaseService.js";

export class PedidoRepositorySupabase extends IPedidoRepository {
  async salvar(pedido) {
    const { error } = await supabase.from("historico_vendas").insert([
      {
        nome_cliente: pedido.nome_cliente,
        mesa: pedido.mesa,
        pedido: JSON.stringify(pedido.pedido),
        total: pedido.total,
        data_hora: pedido.data_hora,
      },
    ]);

    if (error) throw error;
  }

  async listar() {
    const { data, error } = await supabase
      .from("historico_vendas")
      .select("*")
      .order("data_hora", { ascending: false });

    if (error) throw error;
    return data;
  }
}
