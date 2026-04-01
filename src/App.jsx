import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      toast.info(`${product.name} is already in your cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    setCart((prev) => [...prev, product]);
    toast.success(`🛒 ${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleRemove = (id) => {
    const product = cart.find((item) => item.id === id);
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error(`🗑️ ${product?.name} removed from cart.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("✅ Checkout successful! Your cart has been cleared.", {
      position: "top-center",
      autoClose: 3000,
    });
  };

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
      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer
        toastClassName="rounded-xl shadow-lg text-sm font-medium"
        bodyClassName="py-1"
      />
    </div>
  );
}

export default App;
