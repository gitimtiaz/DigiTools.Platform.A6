import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Stats />

      {/* Products Section */}
      <section id="products" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Premium Digital Tools
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Choose from our curated collection of premium digital products designed
              to boost your productivity and creativity.
            </p>
          </div>
          <ProductList />
        </div>
      </section>

    </div>
  );
}

export default App;
