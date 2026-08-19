import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Highlight from "./components/Highlights";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <Highlight />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;