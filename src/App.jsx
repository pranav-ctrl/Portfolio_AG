import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full bg-darkBg text-white font-sans selection:bg-primaryPurple selection:text-white">
      <CustomCursor />
      
      {loading && <Loader onComplete={handleLoaderComplete} />}
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
