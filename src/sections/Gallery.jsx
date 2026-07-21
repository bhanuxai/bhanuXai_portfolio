import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Stack from '../components/Stack';

// Three.js background particles that react to cursor coordinates
function InteractiveParticles({ mouse }) {
  const pointsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentely drift the system in space
    pointsRef.current.rotation.x = Math.sin(t / 10) * 0.08;
    pointsRef.current.rotation.y = t * 0.02;

    // Direct parallax tilt with cursor position
    pointsRef.current.rotation.x += (mouse.y * 0.15 - pointsRef.current.rotation.x) * 0.1;
    pointsRef.current.rotation.y += (mouse.x * 0.15 - pointsRef.current.rotation.y) * 0.1;
  });

  return (
    <group ref={pointsRef}>
      <Stars radius={100} depth={60} count={2500} factor={6} saturation={0.6} fade speed={1.5} />
      <mesh>
        <sphereGeometry args={[14, 16, 16]} />
        <meshBasicMaterial color="#fcd34d" wireframe transparent opacity={0.02} />
      </mesh>
    </group>
  );
}

const MOMENTS = [
  {
    id: "01",
    title: "Camera & Studio Setup",
    desc: "Calibrating focal lengths, soft light boxes, and backdrop contrasts for high-res equipment capture."
  },
  {
    id: "02",
    title: "Desk & Monitor Array",
    desc: "Framing the dual-screen configuration, keycaps, light bars, and clean cables aesthetic."
  },
  {
    id: "03",
    title: "Hardware Lab Bench",
    desc: "Macro-focus of microcontrollers, oscilloscope dials, and custom logic boards."
  },
  {
    id: "04",
    title: "Deep Learning Rig",
    desc: "Close-up snap of the local multi-GPU server tower running training cycles."
  },
  {
    id: "05",
    title: "Midnight Brainstorm",
    desc: "Wide-aperture capture of the ideation whiteboard containing neural architecture graphs."
  }
];

export default function Gallery() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMouse({ x, y });
  };

  const cards = MOMENTS.map((moment, i) => (
    <div 
      key={i} 
      className="w-full h-full bg-[#0d0d11] border-[3px] border-black dark:border-white p-4 flex flex-col justify-between font-mono text-textLight relative overflow-hidden select-none"
    >
      {/* Scanning scanline animation */}
      <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 animate-scanline pointer-events-none" />
      
      {/* Digital Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />

      {/* Polaroid Viewfinder Photo Area */}
      <div className="flex-grow border-2 border-dashed border-white/10 rounded flex flex-col items-center justify-center p-6 bg-black/40 relative overflow-hidden">
        {/* Viewfinder corner brackets */}
        <div className="absolute w-4 h-4 border-t-2 border-l-2 border-primary top-3 left-3 opacity-60" />
        <div className="absolute w-4 h-4 border-t-2 border-r-2 border-primary top-3 right-3 opacity-60" />
        <div className="absolute w-4 h-4 border-b-2 border-l-2 border-primary bottom-3 left-3 opacity-60" />
        <div className="absolute w-4 h-4 border-b-2 border-r-2 border-primary bottom-3 right-3 opacity-60" />
        
        {/* Animated Camera Aperture/Lens */}
        <div className="w-20 h-20 rounded-full border-4 border-primary/20 flex items-center justify-center relative animate-pulse-slow">
          <div className="w-14 h-14 rounded-full border-2 border-primary/40 flex items-center justify-center animate-spin-slow">
            <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          </div>
          {/* Aperture shutter blades */}
          <span className="absolute w-1 h-3 bg-primary/40 top-1 left-1/2 -translate-x-1/2 rotate-12" />
          <span className="absolute w-1 h-3 bg-primary/40 bottom-1 left-1/2 -translate-x-1/2 rotate-12" />
          <span className="absolute w-3 h-1 bg-primary/40 left-1 top-1/2 -translate-y-1/2 rotate-12" />
          <span className="absolute w-3 h-1 bg-primary/40 right-1 top-1/2 -translate-y-1/2 rotate-12" />
        </div>

        <span className="text-[9px] font-bold tracking-widest text-primary mt-6 uppercase animate-pulse">
          [ CAPTURING ACTIVE SETUP... ]
        </span>
      </div>

      {/* Polaroid Info Footer */}
      <div className="pt-4 pb-1">
        <span className="text-[8px] font-bold text-accent uppercase tracking-widest block mb-1">
          Workspace Moment #{moment.id}
        </span>
        <h4 className="text-sm font-black text-textLight tracking-tight leading-tight">
          {moment.title}
        </h4>
        <p className="text-[9px] text-textMuted mt-1.5 leading-relaxed font-medium">
          {moment.desc}
        </p>
        
        <div className="flex justify-between items-center text-[8px] text-primary/70 font-mono mt-4 border-t border-white/5 pt-2">
          <span>LATITUDE: 31.2514 N</span>
          <span>PHOTO COMMING SOON</span>
        </div>
      </div>
    </div>
  ));

  return (
    <section 
      id="gallery" 
      onMouseMove={handleMouseMove}
      className="py-24 relative overflow-hidden bg-bgDark cursor-default"
    >
      {/* Self-contained styling for scanlines and patterns */}
      <style>{`
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 5s linear infinite;
        }
        .bg-grid-pattern {
          background-size: 15px 15px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
        .animate-spin-slow {
          animation: spin 16s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .7; transform: scale(0.97); }
        }
      `}</style>

      {/* WebGL Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
          <InteractiveParticles mouse={mouse} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
            I am currently taking high-resolution captures of my hardware lab, coding screens, and setup. Real photos will be uploaded here soon!
          </motion.p>
        </div>

        {/* Stack Deck Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[320px] h-[400px] md:w-[360px] md:h-[460px] relative select-none">
            <Stack
              randomRotation={true}
              sensitivity={160}
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
            className="text-[10px] font-mono text-primary mt-8 tracking-wider pointer-events-none font-bold uppercase"
          >
            💡 Drag cards left/right or click them to cycle the deck
          </motion.p>
        </div>

      </div>
    </section>
  );
}
