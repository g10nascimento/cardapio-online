import { useOrder } from "../context/OrderContext";

export default function Review() {
  const { order, total, removeFromOrder, clearOrder } = useOrder();

  return (
    <main className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Revisar Pedido</h2>

      {order.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum item adicionado ainda.</p>
      ) : (
        <div className="bg-white rounded-2xl shadow p-6 max-w-lg mx-auto">
          {order.map((item) => (
            <div key={item.id} className="flex justify-between mb-4 items-center">
              <p>{item.name} x {item.quantity}</p>
              <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromOrder(item.id)}
                className="text-red-500 hover:underline"
              >
                Remover
              </button>
            </div>
          ))}
          <div className="border-t pt-4 text-right">
            <h3 className="font-bold text-lg">Total: R$ {total.toFixed(2)}</h3>
            <button
              onClick={() => {
                alert("Pedido enviado para a cozinha!");
                clearOrder();
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl mt-4 transition"
            >
              Enviar Pedido
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
