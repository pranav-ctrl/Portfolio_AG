import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-element',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative z-10 bg-darkBg transition-theme">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">

          <div className="md:col-span-4">
            <h2 className="about-element text-4xl md:text-5xl font-bold tracking-tighter text-textMain mb-6 transition-theme">
              About
            </h2>
            <div className="about-element w-12 h-[1px] bg-borderMedium mb-8 transition-theme" />
          </div>

          <div className="md:col-span-8 space-y-8 text-xl md:text-2xl text-textMuted font-light leading-relaxed tracking-tight">
            <p className="about-element text-textMain transition-theme">
              I am a passionate Computer Science student dedicated to crafting premium digital experiences. I specialize in bridging the gap between elegant design and complex engineering.
            </p>
            <p className="about-element">
              My focus is on writing clean, modular code to build intuitive web applications. Whether it's animating complex frontend user interfaces with React and GSAP or structuring robust full-stack architectures, I am consistently exploring the bleeding edge of modern web development.
            </p>


          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
