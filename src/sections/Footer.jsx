import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-[3px] border-black dark:border-white bg-transparent relative overflow-hidden">
      
      {/* Decorative Scrolling Marquee */}
      <div className="py-4 border-b border-glassBorder/40 bg-white/[0.01] overflow-hidden select-none pointer-events-none">
        <div className="flex gap-4 whitespace-nowrap animate-marquee font-mono text-[9px] uppercase tracking-widest text-textMuted/45">
          <div className="flex gap-4 justify-around shrink-0 min-w-full">
            <span>AI &amp; Machine Learning Engineer</span>
            <span>•</span>
            <span>Shaping Cognitive Code</span>
            <span>•</span>
            <span>Building Full-Stack Products</span>
            <span>•</span>
            <span>Designing the Future</span>
            <span>•</span>
          </div>
          <div className="flex gap-4 justify-around shrink-0 min-w-full">
            <span>AI &amp; Machine Learning Engineer</span>
            <span>•</span>
            <span>Shaping Cognitive Code</span>
            <span>•</span>
            <span>Building Full-Stack Products</span>
            <span>•</span>
            <span>Designing the Future</span>
            <span>•</span>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo/Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="font-display font-extrabold text-lg text-textLight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bhanu</span>
            <span className="text-textLight font-light">Xai</span>
          </div>
          <p className="text-[10px] text-textMuted font-medium">
            Designed and engineered for high-performance scale.
          </p>
        </div>

        {/* Legal Text */}
        <div className="text-xs text-textMuted font-medium text-center md:text-left">
          &copy; 2026 Bhanu Sesha Sai. All rights reserved.
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 glassmorphism text-textMuted hover:text-textLight flex items-center justify-center cursor-pointer group"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      {/* Tailwind animation configuration in style block to support CSS marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />

    </footer>
  );
}
