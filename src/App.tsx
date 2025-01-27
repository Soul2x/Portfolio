import React from 'react';
import Snowfall from './components/Snowfall';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f35] via-[#2c3e50] to-[#1a1f35] text-white relative overflow-hidden">
      <Snowfall />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
