import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CircularGallery from '../components/CircularGallery';

const PROFILES = [
  {
    name: 'GitHub',
    url: 'https://github.com/bhanuxai',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    stats: '1,842 Commits • 34 Repos',
    detail: 'Open source projects & research models',
    bgColorStart: '#0f172a',
    bgColorEnd: '#020617',
    textColor: '#ffffff'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bhanu-sesha-sai-/',
    path: 'M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zm-12.874 20.452H5.8V9h3.554v11.452zM7.58 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm12.872 13.019h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z',
    stats: 'Connections & Reach',
    detail: 'Professional network & collaborations',
    bgColorStart: '#1e3a8a',
    bgColorEnd: '#0f172a',
    textColor: '#60a5fa'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/bss_bhanu/',
    path: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z',
    stats: '300+ Solved • Max 1750',
    detail: 'Algorithmic puzzles & performance scripting',
    bgColorStart: '#7c2d12',
    bgColorEnd: '#1c1917',
    textColor: '#fb923c'
  },
  {
    name: 'HackerEarth',
    url: 'https://www.hackerearth.com/@bhanuseshasai95/',
    path: 'M18.447 20.936H5.553V19.66h12.894zM20.973 0H9.511v6.51h.104c.986-1.276 2.206-1.4 3.538-1.306 1.967.117 3.89 1.346 4.017 5.169v7.322c0 .089-.05.177-.138.177h-2.29c-.09 0-.253-.082-.253-.177V10.6c0-1.783-.58-3.115-2.341-3.115-1.282 0-2.637.892-2.637 2.77v7.417c0 .089-.008.072-.102.072h-2.29c-.09 0-.29.022-.29-.072V0H3.178c-.843 0-1.581.673-1.581 1.515v20.996c0 .843.738 1.489 1.58 1.489h17.797c.843 0 1.431-.646 1.431-1.489V1.515c0-.842-.588-1.515-1.43-1.515',
    stats: 'Competitive Programmer',
    detail: 'Algorithmic competitions & code challenges',
    bgColorStart: '#121e2d',
    bgColorEnd: '#0b111a',
    textColor: '#3286e2'
  }
];

export default function CodingProfiles() {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const generated = PROFILES.map(prof => {
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');
      
      // Background Gradient
      const grad = ctx.createLinearGradient(0, 0, 800, 600);
      grad.addColorStop(0, prof.bgColorStart);
      grad.addColorStop(1, prof.bgColorEnd);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 600);
      
      // Draw Abstract Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 800; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 600);
        ctx.stroke();
      }
      for (let y = 0; y < 600; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(800, y);
        ctx.stroke();
      }

      // Card boundary
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 2;
      
      const drawRounded = (x, y, w, h, r) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
      };
      drawRounded(150, 100, 500, 400, 24);
      ctx.fill();
      ctx.stroke();
      
      // Draw Logo path in the center instead of text
      if (prof.path) {
        ctx.save();
        ctx.translate(400, 300); // Center of card (card is 150 to 650 x, 100 to 500 y)
        const scaleFactor = 6.66; // 160px / 24px (fits nicely in card height of 400px)
        ctx.scale(scaleFactor, scaleFactor);
        ctx.translate(-12, -12); // Center path drawing coordinate
        ctx.fillStyle = prof.textColor;
        ctx.fill(new Path2D(prof.path));
        ctx.restore();
      }

      return {
        image: canvas.toDataURL('image/png'),
        text: prof.name,
        url: prof.url
      };
    });
    
    setSlides(generated);
  }, []);

  return (
    <section id="profiles" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-accent uppercase mb-2 block"
          >
            Digital Footprint
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
          >
            Coding &amp; Professional Profiles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-textMuted text-sm md:text-base mt-4 font-medium"
          >
            An interactive 3D WebGL gallery displaying my competitive programming hubs and professional profiles.
          </motion.p>
        </div>

        {/* Circular WebGL Gallery container */}
        <div className="w-full h-[380px] md:h-[420px] relative border-[3px] border-black dark:border-white rounded bg-white dark:bg-zinc-900 overflow-hidden select-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary-color)]">
          {slides.length > 0 && (
            <CircularGallery
              items={slides}
              bend={0.8}
              textColor="transparent" /* hide the extra bottom text mesh, since canvas draws titles directly */
              borderRadius={0.03}
              scrollEase={0.06}
              scrollSpeed={2}
              onActiveIndexChange={setActiveIndex}
            />
          )}
        </div>

        {/* Dynamic Action Button synced with active slide */}
        {slides.length > 0 && (
          <div className="flex justify-center mt-10">
            <motion.a
              key={activeIndex}
              href={slides[activeIndex].url}
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="px-8 py-3.5 rounded font-extrabold text-xs uppercase tracking-wider bg-accent text-black border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all flex items-center gap-2 group cursor-pointer"
            >
              Open {slides[activeIndex].text} Profile
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        )}

      </div>
    </section>
  );
}
