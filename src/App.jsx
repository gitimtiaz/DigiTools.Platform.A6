import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";

function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) return;
    setCart((prev) => [...prev, product]);};

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));};

  const handleCheckout = () => {
    setCart([]);};

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <ToggleSection
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
