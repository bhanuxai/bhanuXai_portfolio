import React from 'react';
import { motion } from 'framer-motion';
import Stack from '../components/Stack';

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format",
    alt: "Creative Coding Space"
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format",
    alt: "Abstract 3D Art"
  },
  {
    src: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format",
    alt: "Mechanical Keyboard Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format",
    alt: "Development Workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format",
    alt: "Late Night Coding Sessions"
  }
];

export default function Gallery() {
  const cards = IMAGES.map((img, i) => (
    <div key={i} className="relative w-full h-full group select-none">
      <img 
        src={img.src} 
        alt={img.alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
        <h4 className="text-white font-semibold text-lg">{img.alt}</h4>
        <span className="text-xs text-textMuted mt-1">Workspace &amp; Inspiration</span>
      </div>
    </div>
  ));

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-bgDark">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block"
          >
            Creative Space
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
          >
            Workspace &amp; Moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-textMuted text-sm md:text-base mt-4 font-medium"
          >
            A visual stack of inspiration, workspaces, late-night setups, and coding parameters.
          </motion.p>
        </div>

        {/* Stack Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[320px] h-[400px] md:w-[360px] md:h-[450px] relative select-none">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cards={cards}
              autoplay={false}
              pauseOnHover={true}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-textMuted mt-8 font-medium tracking-wide pointer-events-none"
          >
            💡 Drag cards left/right or click them to cycle the deck
          </motion.p>
        </div>

      </div>
    </section>
  );
}
