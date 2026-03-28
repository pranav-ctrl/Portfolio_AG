import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Extremely quick and springy follow for a premium feel
      gsap.to(dotRef.current, {
        x: x,
        y: y,
        duration: 0.1,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      ref={dotRef} 
      className="fixed w-3 h-3 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block" 
    />
  );
};

export default CustomCursor;
