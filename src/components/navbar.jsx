import logo from "../assets/DigiTools.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="DigiTools" className="h-8 w-auto object-contain" />
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
            <a
              href="#"
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors px-3 py-2"
            >
              Login
            </a>
            <a href="#" className="bg-gradient-to-r from-violet-700 to-violet-600 hover:from-violet-800 hover:to-violet-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all">
              Get Started
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
