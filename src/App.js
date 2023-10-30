import './App.css';
import Header from './components/header';
import LearnMore from './components/learn-more';
import AboutUs from './components/AboutUs'
import Features from './components/features';
import Hero from './components/hero';
import OurBenifits from './components/OurBenifits';
import Mission from './components/Mission'

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Features />
     <LearnMore />
     <Header />
     <LearnMore />
     <AboutUs />
     <OurBenifits />
     <Mission />
    </div>
  );
}

export default App;
