import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [formState, setFormState] = useState('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out'
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative z-10 bg-darkBg border-t border-borderLight transition-theme">
      <div className="container mx-auto max-w-5xl" ref={contentRef}>

        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-textMain mb-6 text-center lg:text-left leading-[0.9] transition-theme">
          Let's Work<br />Together.
        </h2>

        <div className="grid lg:grid-cols-12 gap-16 mt-20">

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <p className="text-xl text-textMuted font-light leading-relaxed max-w-md transition-theme">
                I am currently open to exciting new opportunities traversing software engineering and premium frontend design.
              </p>

              <div className="flex flex-col space-y-4">
                <a href="mailto:hello@pranavsinha.com" className="text-textMain text-lg font-medium tracking-tight hover:text-textMuted transition-colors py-2 border-b border-transparent hover:border-textMuted w-max">
                  pranavsinha2325@gmail.com
                </a>
                <div className="flex gap-6 pt-4">
                  <a href="https://www.linkedin.com/in/pranav-sinha-417b31312" className="text-sm tracking-widest uppercase text-textMuted hover:text-textMain transition-colors">LinkedIn</a>
                  <a href="https://github.com/pranav-ctrl" className="text-sm tracking-widest uppercase text-textMuted hover:text-textMain transition-colors">GitHub</a>
                  <a href="https://x.com/PranavSinh75807" className="text-sm tracking-widest uppercase text-textMuted hover:text-textMain transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder="What's your name?"
                  className="w-full bg-transparent border-b border-borderMedium py-4 text-textMain placeholder-textMuted focus:outline-none focus:border-textMain transition-theme text-xl font-light"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="What's your email?"
                  className="w-full bg-transparent border-b border-borderMedium py-4 text-textMain placeholder-textMuted focus:outline-none focus:border-textMain transition-theme text-xl font-light"
                />
              </div>
              <div className="relative group">
                <textarea
                  required
                  rows="3"
                  placeholder="Tell me about your project."
                  className="w-full bg-transparent border-b border-borderMedium py-4 text-textMain placeholder-textMuted focus:outline-none focus:border-textMain transition-theme text-xl font-light resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="self-end px-12 py-5 rounded-full font-bold text-darkBg bg-textMain hover:bg-surface hover:text-textMain hover:border hover:border-borderLight hover:scale-105 transition-all duration-500 tracking-widest uppercase text-sm disabled:opacity-50 disabled:hover:scale-100 border border-transparent"
              >
                {formState === 'idle' ? 'Send Inquiry' : formState === 'sending' ? 'Sending...' : 'Message Sent'}
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
        <span className="text-xs tracking-widest uppercase text-textMuted transition-theme">
          &copy; {new Date().getFullYear()} Pranav Sinha. Built with React & GSAP.
        </span>
      </div>
    </section>
  );
};

export default Contact;
