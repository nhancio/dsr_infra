import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Services from './components/Services';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <Features />
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Services />
          <Footer />
        </div>
      } />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;