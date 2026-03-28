import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Default soft beige/cream hex if nothing is in local storage
  const [accentColor, setAccentColor] = useState(localStorage.getItem('accentColor') || '#fff3d6');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-mode');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light-mode');
    }
  }, []);

  // Sync Accent Color to CSS Variables globally
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  const toggleTheme = (e) => {
    const newTheme = !isDarkMode;
    
    // Get click coordinates for the expanding circle
    const x = e.clientX;
    const y = e.clientY;
    
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '99999';
    // Set overlay background to the new theme's core background color
    overlay.style.backgroundColor = newTheme ? '#050505' : '#f7f7f7';
    overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
    document.body.appendChild(overlay);

    const animation = overlay.animate(
      [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(150vw at ${x}px ${y}px)` }
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.85, 0, 0.15, 1)',
        fill: 'forwards'
      }
    );

    animation.onfinish = () => {
      setIsDarkMode(newTheme);
      if (newTheme) {
        document.documentElement.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      }
      overlay.remove();
    };
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
