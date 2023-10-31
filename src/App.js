import { Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Header from './components/header';
import LearnMore from './components/learn-more';
import AboutUs from './components/AboutUs'
import Features from './components/features';
import Hero from './components/hero';
import OurBenifits from './components/OurBenifits';
import Mission from './components/Mission'
=======
import Home from './pages/home';
import Contact from './pages/contact';
import Features from './pages/features';
import Pricing from './pages/pricing';
import About from './pages/about';
>>>>>>> 0049cb8 (footer, other pages, routing, active navItems)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     <Header />
     <Hero />
     <Features />
     <LearnMore />
     <Header />
     <LearnMore />
     <AboutUs />
     <OurBenifits />
     <Mission />
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
>>>>>>> 0049cb8 (footer, other pages, routing, active navItems)
    </div>
  );
}

export default App;
