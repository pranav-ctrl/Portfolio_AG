import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
import profileImg from '../assets/profile.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 ease-out ${isScrolled ? 'py-4 bg-darkBg/90 backdrop-blur-md border-b border-borderLight' : 'py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="relative group flex items-center outline-none">
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" 
            style={{ backgroundColor: 'var(--accent-color)' }}
          />
          <img 
            src={profileImg} 
            alt="Pranav Sinha" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-borderMedium group-hover:scale-105 group-hover:border-accent transition-all duration-300 relative z-10 shadow-lg shadow-black/20"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 items-center">
          {links.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`}
                className="text-textMuted hover:text-textMain transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link}
              </a>
            </li>
          ))}
          
          <li>
            <button 
              onClick={toggleTheme} 
              className="ml-4 p-2 relative group flex items-center justify-center text-textMuted hover:text-accent transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              {isDarkMode ? <Sun size={20} className="relative z-10" /> : <Moon size={20} className="relative z-10" />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-6 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 relative group flex items-center justify-center text-textMuted hover:text-accent transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="text-textMain" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`fixed inset-0 bg-darkBg z-[4000] flex flex-col justify-center items-center transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <button className="absolute top-8 right-6 text-textMain" onClick={() => setIsOpen(false)}>
          <X size={32} strokeWidth={1} />
        </button>
        <ul className="flex flex-col space-y-8 text-center pt-10">
          {links.map((link) => (
            <li key={link} className="overflow-hidden">
              <a 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-light text-textMuted hover:text-textMain transition-colors duration-300 tracking-tight"
                style={{ display: 'block', transform: isOpen ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.6s cubic-bezier(0.85, 0, 0.15, 1) 0.2s' }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
