import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-600 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🍔 Cardápio Online</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-yellow-300 transition">Cardápio</Link>
          <Link to="/revisar" className="hover:text-yellow-300 transition">Revisar Pedido</Link>
          <Link to="/cozinha" className="hover:text-yellow-300 transition">Cozinha</Link>
        </div>
      </nav>
    </header>
  );
}
