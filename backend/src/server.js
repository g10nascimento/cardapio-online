import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(cors());
app.use(express.json());


const supabase = createClient(
  "https://whvdzpqagqlgefazpcvz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodmR6cHFhZ3FsZ2VmYXpwY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MDM2MTgsImV4cCI6MjA3ODM3OTYxOH0.WLZ8Aj_YeLe9mRs7o0TvKdwto-nbSfzR4RcyBpoS9tA"
);

//  Memória temporária (vetor)
let pedidos = [];

//  Rota para receber pedidos do cliente
app.post("/pedido", async (req, res) => {
  const { nome_cliente, mesa, itens } = req.body;
  const total = itens.reduce((acc, i) => acc + i.preco * i.quantidade, 0);

  const pedido = { nome_cliente, mesa, itens, total, data: new Date() };
  pedidos.push(pedido); // guarda temporariamente

  // Salva no banco (Supabase)
  await supabase.from("historico_vendas").insert(pedido);

  res.json({ message: "Pedido registrado com sucesso!", pedido });
});

// Rota para listar pedidos (painel da cozinha)
app.get("/cozinha", (req, res) => {
  res.json(pedidos);
});

app.listen(4000, () => console.log("✅ Servidor rodando na porta 4000"));4

//O que são:

//express → cria o servidor e as rotas.

//cors → permite que o frontend acesse o backend.

//@supabase/supabase-js → conecta o servidor ao Supabase, que é o banco de dados.