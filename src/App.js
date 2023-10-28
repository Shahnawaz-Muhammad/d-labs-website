import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import Features from './pages/features';
import Pricing from './pages/pricing';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
