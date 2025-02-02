import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <Hero />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default App;
