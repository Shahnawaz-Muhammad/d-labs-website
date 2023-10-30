import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      {" "}
      <AnimatePresence mode="wait">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title="About" />} />
          <Route path="/features" element={<Features title="Features" />} />
          <Route path="/pricing" element={<Pricing title="Pricing" />} />
          <Route path="/contact" element={<Contact title="Contact" />} />
        </Routes>
        <Footer />{" "}
      </AnimatePresence>
    </div>
  );
}

export default App;
