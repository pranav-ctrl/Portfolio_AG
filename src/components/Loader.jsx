import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
    .to(textRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: 'power2.inOut'
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: 'expo.inOut'
    });

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] bg-darkBg flex items-center justify-center">
      <div ref={textRef} className="opacity-0 font-medium tracking-[0.2em] text-textMain uppercase text-xs">
        Pranav Sinha &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Loader;
