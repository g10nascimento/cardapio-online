import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderProvider } from "./context/OrderContext";
import Menu from "./pages/Menu";
import KitchenPanel from "./pages/KitchenPanel"; // ✅ importa o painel da cozinha

function App() {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          {/* Página principal do cliente */}
          <Route path="/" element={<Menu />} />

          {/* Página da cozinha */}
          <Route path="/cozinha" element={<KitchenPanel />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
