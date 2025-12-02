import React, { useState } from "react";
import batata from "../assets/images/batata.jpg";
import hamburguer from "../assets/images/hamburguer.jpg";
import pizza from "../assets/images/pizza.jpg";
import refrigerante from "../assets/images/refrigerante.jpg";
import chocolate from "../assets/images/chocolate.jpg";



export default function Menu() {
  const [nomeCliente, setNomeCliente] = useState("");
  const [mesa, setMesa] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: "Batata Frita", preco: 15, imagem: batata },
    { id: 2, nome: "Hambúrguer", preco: 25, imagem: hamburguer },
    { id: 3, nome: "Pizza", preco: 40, imagem: pizza },
    { id: 4, nome: "Refrigerante", preco: 8, imagem: refrigerante },
    { id: 5, nome: "Chocolate", preco: 10, imagem: chocolate },
  ];

  const adicionarAoCarrinho = (produto) => {
    const existente = carrinho.find((item) => item.id === produto.id);
    if (existente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  // 🧾 Função para enviar pedido ao backend
  const enviarPedido = async () => {
    if (!nomeCliente || !mesa || carrinho.length === 0) {
      alert("Preencha o nome, mesa e adicione itens ao carrinho!");
      return;
    }

    const pedido = {
      nome_cliente: nomeCliente,
      mesa,
      itens: carrinho,
    };

    try {
      const response = await fetch("http://localhost:4000/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });

      const data = await response.json();

      alert(data.message);
      setCarrinho([]); // limpa o carrinho após enviar
    } catch (error) {
      console.error(error);
      alert("❌ Erro ao enviar pedido!");
    }
  };

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="p-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🧾 Cardápio Online
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Nome do cliente"
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
          className="border p-2 rounded-lg shadow-sm"
        />
        <input
          type="text"
          placeholder="Número da mesa"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
          className="border p-2 rounded-lg shadow-sm"
        />
      </div>

      {/* Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl font-semibold">{produto.nome}</h2>
            <p className="text-gray-600 mb-3">R$ {produto.preco.toFixed(2)}</p>
            <button
              onClick={() => adicionarAoCarrinho(produto)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>

      {/* Carrinho */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">🛒 Seu Pedido</h2>
        {carrinho.length === 0 ? (
          <p className="text-gray-500">Nenhum item adicionado.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {carrinho.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>
                    {item.nome} x{item.quantidade}
                  </span>
                  <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                  <button
                    onClick={() => removerDoCarrinho(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <strong>Total: R$ {total.toFixed(2)}</strong>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={enviarPedido}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
              >
                Finalizar Pedido ✅
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
