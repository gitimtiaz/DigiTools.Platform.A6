import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Stats />
      <ToggleSection />
    </div>
  );
}

export default App;
