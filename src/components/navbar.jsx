import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#aa00b9] bg-clip-text text-transparent">
                DigiTools
              </span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            {/* Cart Icon with live count badge */}
            <div className="relative">
              <button className="p-2 text-gray-600 hover:text-violet-600 transition-colors">
                <ShoppingCart size={22} />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <a href="#" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors px-3 py-2">
              Login
            </a>
            <a
              href="#" className="bg-gradient-to-r from-[#4f46e5] via-[#6d28d9] to-[#9333ea] 
                                text-white text-sm font-semibold px-5 py-2 rounded-full 
                                transition-all duration-300 ease-in-out 
                                hover:from-[#4338ca] hover:via-[#5b21b6] hover:to-[#7e22ce]
                                hover:shadow-md hover:shadow-violet-300/40 hover:scale-105">
              Get Started
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
