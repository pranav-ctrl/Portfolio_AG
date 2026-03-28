import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const { isDarkMode, accentColor, setAccentColor } = useTheme();

  const materialRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.setHex(isDarkMode ? 0x888888 : 0x888888); 
      materialRef.current.blending = isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending;
      materialRef.current.opacity = isDarkMode ? 0.4 : 0.8;
      
      if (sceneRef.current) {
        sceneRef.current.fog.color.setHex(isDarkMode ? 0x050505 : 0xf7f7f7);
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle floating animation
      gsap.to('.hero-image-container', {
        y: -15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.from('.hero-element', {
        y: 40, opacity: 0, duration: 1.5, stagger: 0.15, ease: 'power4.out', delay: 0.5
      });
    }, textRef);

    if (!canvasRef.current) return;
    
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x050505, 0.002);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 200;
    camera.position.y = 50;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 600;
        const z = (Math.random() - 0.5) * 600;
        const y = Math.sin(x * 0.02) * 20 + Math.cos(z * 0.02) * 20; 
        
        positions[i*3] = x;
        positions[i*3+1] = y;
        positions[i*3+2] = z;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 1.5,
      color: 0x888888,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    materialRef.current = particlesMaterial;

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) * 0.05;
      mouseY = (event.clientY - windowHalfY) * 0.05;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      const positions = particlesGeometry.attributes.position.array;
      for(let i = 0; i < count; i++) {
          const x = positions[i*3];
          const z = positions[i*3+2];
          positions[i*3+1] = Math.sin((x + elapsedTime * 10) * 0.02) * 15 + Math.cos((z + elapsedTime * 8) * 0.02) * 15;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      camera.position.x += (mouseX - camera.position.x) * 0.02;
      camera.position.y += (-mouseY + 50 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-darkBg transition-theme">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none transition-theme" />
      
      <div ref={textRef} className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20 md:mt-16">
        
        {/* Main Profile Image with Dynamic Accent Glow Array */}
        <div className="hero-element hero-image-container relative group mb-8 md:mb-12 mt-10 md:mt-0 flex flex-col items-center">
          
          {/* Animated dynamic pulse ring behind image */}
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-80 group-hover:blur-2xl animate-pulse transition-all duration-700 pointer-events-none"
            style={{ backgroundColor: 'var(--accent-color)' }}
          ></div>
          
          {/* Dynamic crisp border wrap replacing static gradients */}
          <div 
            className="p-[3px] rounded-full relative z-10 group-hover:scale-[1.03] transition-transform duration-500"
            style={{ 
              backgroundColor: 'var(--accent-color)',
              boxShadow: '0 0 35px var(--accent-color)' 
            }}
          >
            <img 
              src={profileImg} 
              alt="Pranav Sinha" 
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-[6px] border-surface bg-surface shadow-black/50"
            />
          </div>

          {/* Secret Settings / Accent Color Picker (reveals on hover) */}
          <div className="absolute -right-2 bottom-0 md:-right-6 md:bottom-2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            <span className="text-[9px] text-textMain uppercase tracking-widest font-bold bg-darkBg/80 backdrop-blur-md px-2 py-1 rounded-md border border-borderLight shadow-lg whitespace-nowrap hidden sm:block">
              Accent
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-surface shadow-xl cursor-pointer relative ring-2 ring-borderLight hover:ring-accent transition-all" title="Change Theme Accent">
              <input 
                type="color" 
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="absolute inset-[-25%] w-[150%] h-[150%] cursor-pointer p-0 m-0 border-none outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <span className="hero-element text-sm md:text-md uppercase tracking-[0.3em] text-textMuted mb-6 font-medium">
          Portfolio
        </span>
        <h1 className="hero-element text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-textMain leading-[0.9] mb-8 transition-theme">
          Pranav Sinha
        </h1>
        <h2 className="hero-element text-xl md:text-2xl text-textMuted font-normal max-w-2xl leading-relaxed mb-12 transition-theme">
          Aspiring Software Developer engineering sophisticated digital experiences across the full stack.
        </h2>
        
        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-textMain text-darkBg text-sm font-bold tracking-widest uppercase hover:bg-textMuted transition-theme duration-300">
            Selected Works
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 border border-borderMedium text-textMain text-sm font-bold tracking-widest uppercase hover:bg-overlay transition-theme duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
