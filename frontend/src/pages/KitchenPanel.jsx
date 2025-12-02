import React, { useEffect, useState } from "react";

const KitchenPanel = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      const res = await fetch("http://localhost:4000/cozinha");
      const data = await res.json();
      setPedidos(data);
    };
    fetchPedidos();
    const interval = setInterval(fetchPedidos, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🍳 Painel da Cozinha</h1>
      {pedidos.length === 0 ? (
        <p>Nenhum pedido no momento.</p>
      ) : (
        pedidos.map((p, index) => (
          <div
            key={index}
            className="p-4 mb-3 rounded-lg shadow-md bg-white border border-gray-200"
          >
            <h2 className="font-semibold text-lg">
              Mesa {p.mesa} - {p.nome_cliente}
            </h2>
            <ul className="ml-4 mt-2">
              {p.itens.map((item, i) => (
                <li key={i}>
                  🍽️ {item.nome} x{item.quantidade} — R${item.preco}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">💰 Total: R${p.total}</p>
          </div>
        ))
      )}
    </div>
  );
};


export default KitchenPanel;
