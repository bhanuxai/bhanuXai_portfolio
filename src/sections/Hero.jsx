import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Send, Code } from 'lucide-react';
import Lanyard from '../components/Lanyard';
import DarkVeil from '../components/DarkVeil';
import SplitText from '../components/SplitText';

export default function Hero() {
  const containerRef = useRef(null);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const yOffset = -80; // nav height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 md:py-0"
    >
      {/* DarkVeil Background Shader */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-12 lg:mt-0">
        
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism text-xs font-semibold tracking-wider text-accent uppercase mb-6 border border-accent/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            AI & Machine Learning Engineer
          </motion.div>

          {/* Text Reveal Title */}
          <h1 className="font-display font-black text-5xl md:text-7xl xl:text-8xl tracking-tight leading-none mb-6">
            <SplitText
              text="Bhanu Sesha Sai"
              className="text-reveal text-white mb-2"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign=""
              tag="span"
            />
          </h1>

          {/* Description Reveal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-base md:text-lg text-textMuted leading-relaxed mb-8 font-medium"
          >
            I build intelligent software, AI-powered applications, and scalable web products that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
          >
            {/* Primary View Projects */}
            <button
              onClick={() => handleScrollTo('#projects')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center gap-2 glow-button hover:scale-105 active:scale-95 transition-all duration-300 shadow-glow-primary hover:shadow-glow-accent cursor-none"
            >
              <Code className="w-4 h-4" />
              View Projects
            </button>

            {/* Secondary Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm glassmorphism text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-none"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>

            {/* Secondary Contact */}
            <button
              onClick={() => handleScrollTo('#contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm text-textMuted hover:text-white flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-none"
            >
              <Send className="w-4 h-4" />
              Contact
            </button>
          </motion.div>
        </div>

        {/* Right Side: 3D ID Card Lanyard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:col-span-5 w-full h-[450px] lg:h-[550px] relative flex items-center justify-center select-none"
        >
          <Lanyard />
        </motion.div>

        {/* Bottom Scrolling Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-none hidden lg:flex"
          onClick={() => handleScrollTo('#about')}
        >
          <span className="text-[9px] uppercase tracking-widest text-textMuted font-bold">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
