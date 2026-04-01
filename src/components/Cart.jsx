import { ShoppingCart } from "lucide-react";

const Cart = ({ cart }) => {
  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center">
          <ShoppingCart size={28} className="text-violet-400" />
        </div>
        <h3 className="text-gray-700 font-semibold text-lg">Your cart is empty</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Browse our products and add items to your cart to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
      <p className="text-gray-400 text-sm">Cart items will appear here.</p>
    </div>
  );
};

export default Cart;
