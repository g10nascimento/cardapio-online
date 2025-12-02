import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [pedido, setPedido] = useState([]);

  function adicionarAoPedido(produto) {
    setPedido((prev) => [...prev, produto]);
  }

  return (
    <OrderContext.Provider value={{ pedido, adicionarAoPedido }}>
      {children}
    </OrderContext.Provider>
  );
}
