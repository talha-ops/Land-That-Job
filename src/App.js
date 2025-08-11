import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
