import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Layout, Server, Wrench, Database, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { title: 'Programming', icon: Terminal, skills: ['Java', 'Python', 'JavaScript', 'C', 'C++'] },
  { title: 'Frontend', icon: Layout, skills: ['React.js', 'Next.js', 'Tailwind', 'GSAP', 'Three.js'] },
  { title: 'Backend & DB', icon: Server, skills: ['Node.js', 'Express', 'PostgreSQL', 'Firebase', 'MongoDB'] },
  { title: 'Systems & Tools', icon: Wrench, skills: ['Git', 'Docker', 'Linux', 'Vercel', 'Figma'] },
  { title: 'Architecture', icon: Database, skills: ['Microservices', 'REST APIs', 'System Design'] },
  { title: 'Mobile Dev', icon: Smartphone, skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'] }
];

const SkillCard = ({ title, icon: Icon, skills }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !contentRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const moveX = ((x - centerX) / centerX) * 12;
    const moveY = ((y - centerY) / centerY) * 12;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      scale: 1.03,
      duration: 0.5,
      ease: 'power3.out',
      transformPerspective: 1000,
      borderColor: 'var(--border-medium)',
      boxShadow: '0 20px 40px rgba(var(--glow-rgb), 0.05)'
    });

    gsap.to(contentRef.current, {
      x: moveX,
      y: moveY,
      duration: 0.5,
      ease: 'power3.out'
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !contentRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power4.out',
      borderColor: 'var(--border-light)',
      boxShadow: '0 0px 0px rgba(0,0,0,0)'
    });

    gsap.to(contentRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power4.out'
    });
  };

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] h-[450px] bg-surface/50 backdrop-blur-2xl border border-borderLight rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center transform-gpu relative overflow-hidden group/card z-10 transition-theme"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: 'transform' }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-overlay to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-700 pointer-events-none"
      />

      <div ref={contentRef} className="w-full h-full flex flex-col items-center justify-center relative z-10 pointer-events-none">
        <div className="text-textMuted mb-10 transition-colors duration-500 group-hover/card:text-textMain">
          <Icon size={52} strokeWidth={1} />
        </div>

        <h3 className="text-2xl font-bold mb-8 text-textMain tracking-tight transition-theme">{title}</h3>

        <div className="flex flex-wrap justify-center gap-3 pointer-events-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 md:px-5 md:py-2 text-[11px] md:text-xs font-semibold tracking-wider uppercase border border-borderMedium rounded-full text-textMuted hover:text-darkBg hover:bg-textMain hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const trackWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const watermarkRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeftStart.current = window.scrollY;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = (startX.current - e.clientX) * 2.5;
    window.scrollTo(0, scrollLeftStart.current + deltaX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.skills-header',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          y: 0, opacity: 1, duration: 1.2, ease: 'power4.out'
        }
      );

      const track = trackRef.current;
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + (window.innerWidth > 768 ? 160 : 48));

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: trackWrapperRef.current,
          start: 'center center',
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress)
        }
      });

      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          x: -300,
          ease: 'none',
          scrollTrigger: {
            trigger: trackWrapperRef.current,
            start: 'center center',
            end: () => `+=${track.scrollWidth}`,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      }

      gsap.fromTo(track.children,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 bg-darkBg overflow-hidden transition-theme"
    >
      <div
        ref={trackWrapperRef}
        className="w-full h-screen flex flex-col justify-center cursor-grab active:cursor-grabbing select-none relative"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          ref={watermarkRef}
          className="absolute top-1/2 left-1/2 w-[150vw] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0 hidden md:block"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >

        </div>

        <div className="absolute top-24 md:top-32 left-6 md:left-20 skills-header z-20 pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-textMain mb-4 transition-theme">Capabilities</h2>
          <div className="w-12 h-[1px] bg-borderMedium mb-4 transition-theme" />
        </div>

        <div ref={trackRef} className="flex gap-6 md:gap-16 w-max items-center px-6 md:px-20 relative z-10 mt-20 md:mt-32">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>

        <div className="absolute bottom-12 left-6 md:left-20 right-6 md:right-20 flex items-center gap-6 skills-header z-20 pointer-events-none">
          <span className="text-xs font-bold text-textMuted tracking-widest w-8">0%</span>
          <div className="flex-1 h-[2px] bg-borderLight relative overflow-hidden rounded-full transition-theme">
            <div
              className="absolute top-0 left-0 bottom-0 bg-textMain transition-all duration-300 ease-out"
              style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }}
            />
          </div>
          <span className="text-xs font-bold text-textMain tracking-widest w-10 text-right transition-theme">100%</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
