import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-header', 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          y: 0, opacity: 1, duration: 1.2, ease: 'power4.out'
        }
      );

      gsap.fromTo('.exp-row', 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: contentRef.current, start: 'top 75%' },
          y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out'
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 relative z-10 bg-darkBg border-t border-borderLight transition-theme">
      <div className="container mx-auto max-w-5xl" ref={contentRef}>
        <div className="flex justify-between items-end border-b border-borderMedium pb-8 mb-16 exp-header transition-theme">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-textMain transition-theme">Experience</h2>
          </div>
          <span className="text-sm tracking-widest uppercase text-textMuted hidden sm:block">Career Timeline</span>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-12 gap-8 exp-row group">
            <div className="md:col-span-3 text-textMuted tracking-wider text-sm mt-1">
              2024 &mdash; Present
            </div>
            <div className="md:col-span-9">
              <h3 className="text-2xl font-bold text-textMain tracking-tight mb-2 group-hover:translate-x-2 transition-all duration-500">Web Developer Intern</h3>
              <h4 className="text-lg text-textMuted font-light mb-6 transition-theme">Oasis Infobyte</h4>
              <p className="text-textMuted leading-relaxed max-w-2xl font-light transition-theme">
                Developed responsive web pages and implemented core logic using vanilla JavaScript and modern frameworks. Focused on modular architecture, reducing redundant renders and improving layout paints.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 exp-row group">
            <div className="md:col-span-3 text-textMuted tracking-wider text-sm mt-1">
              2023 &mdash; 2024
            </div>
            <div className="md:col-span-9">
              <h3 className="text-2xl font-bold text-textMain tracking-tight mb-2 group-hover:translate-x-2 transition-all duration-500">Software Engineering Intern</h3>
              <h4 className="text-lg text-textMuted font-light mb-6 transition-theme">CodeAlpha</h4>
              <p className="text-textMuted leading-relaxed max-w-2xl font-light transition-theme">
                Executed massive layout overhauls and resolved complex UI bugs. Streamlined the internal styling documentation to accelerate team onboarding speed and improve overall site accessibility.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
