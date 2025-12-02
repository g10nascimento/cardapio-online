import { useOrder } from "../context/OrderContext";

export default function ProductCard({ product }) {
  const { addToOrder } = useOrder();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mb-2">R$ {product.price.toFixed(2)}</p>
        <button
          onClick={() => addToOrder(product)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
