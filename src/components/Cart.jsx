import { ShoppingCart, Trash2 } from "lucide-react";

const Cart = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

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

      {/* Cart Items */}
      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3"
          >
            {/* Icon */}
            <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              {item.icon}
            </div>

            {/* Name and Price */}
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 font-semibold text-sm truncate">{item.name}</p>
              <p className="text-gray-500 text-sm">${item.price}</p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => onRemove(item.id)}
              className="text-rose-500 hover:text-rose-700 font-semibold text-sm transition-colors flex items-center gap-1 flex-shrink-0"
            >
              <Trash2 size={14} />
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-gray-500 font-medium">Total:</span>
        <span className="text-2xl font-extrabold text-gray-900">${total}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-200 text-sm"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
