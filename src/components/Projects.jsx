import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'GFG Campus Platform',
    description: 'An interactive chapter portal featuring algorithmic leaderboards and rich event tracking.',
    tech: ['React', 'Tailwind', 'Firebase'],
    year: '2025',
    link: 'https://gfg-srmncr.netlify.app'
  },
  {
    title: 'ICMETE Conference',
    description: 'Official platform for an international technological conference with complex registration flows.',
    tech: ['Next.js', 'Framer', 'Stripe'],
    year: '2025',
    link: 'https://www.icmete.in'
  },
  {
    title: 'AstroCal Web',
    description: 'A feature-rich astronomy calendar tracking celestial events in real-time.',
    tech: ['JavaScript', 'Space APIs', 'Three.js'],
    year: '2024',
    link: 'https://pranav-ctrl.github.io/astocral-hosting/'
  },

];

const Projects = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proj-heading',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          y: 0, opacity: 1, duration: 1.2, ease: 'power4.out'
        }
      );

      gsap.fromTo(listRef.current.children,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: listRef.current, start: 'top 75%' },
          y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out'
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative z-10 bg-darkBg transition-theme">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-20 md:items-start md:text-left">
          <h2 className="proj-heading text-4xl md:text-5xl font-bold tracking-tighter text-textMain mb-6 transition-theme">Selected Works</h2>
          <div className="proj-heading w-12 h-[1px] bg-borderMedium transition-theme" />
        </div>

        <div ref={listRef} className="flex flex-col border-t border-borderLight transition-theme">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target={project.link !== '#' ? '_blank' : '_self'}
              rel={project.link !== '#' ? 'noopener noreferrer' : ''}
              aria-label={`Open ${project.title}`}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-12 border-b border-borderLight transition-all duration-500 ease-out hover:px-6 hover:bg-surface"
            >
              <div className="flex-1 md:pr-12">
                <h3 className="text-3xl font-bold text-textMain mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-textMuted text-lg font-light leading-relaxed mb-6 md:mb-0 max-w-2xl transition-theme">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-4 min-w-[200px]">
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs tracking-widest uppercase font-medium text-textMuted opacity-70 border border-borderLight rounded-full px-3 py-1 transition-all duration-300 group-hover:border-borderMedium group-hover:opacity-100">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-textMuted group-hover:text-textMain transition-colors duration-500 mt-2 md:mt-0">
                  <span className="text-sm font-medium">{project.year}</span>
                  <div className="w-12 h-12 rounded-full border border-borderLight flex items-center justify-center group-hover:bg-textMain group-hover:text-darkBg group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(var(--glow-rgb),0.2)] transition-all duration-500">
                    <ArrowUpRight size={20} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
