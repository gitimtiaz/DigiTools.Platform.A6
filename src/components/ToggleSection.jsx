import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const ToggleSection = () => {
  const [activeTab, setActiveTab] = useState("products");
  const cart = [];

  return (
    <section id="products" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "products"
                  ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                  : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "cart"
                  ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                  : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
              }`}
            >
              Cart
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "products" ? (
          <ProductList />
        ) : (
          <div className="max-w-3xl mx-auto">
            <Cart cart={cart} />
          </div>
        )}

      </div>
    </section>
  );
};

export default ToggleSection;
