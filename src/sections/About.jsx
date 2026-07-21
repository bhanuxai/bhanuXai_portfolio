import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Brain, Cpu, Trophy, GitBranch, Layers, Award } from 'lucide-react';

// Reusable 3D Tilt Card Component
function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  
  // Motion values for tilt degrees
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Springs for smooth movement
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of the card
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    // Map position to max tilt angle (e.g. 10 degrees)
    const tiltX = -(y / (height / 2)) * 12;
    const tiltY = (x / (width / 2)) * 12;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
      }}
      className={`glassmorphism rounded-2xl p-8 relative overflow-hidden transition-all duration-300 border border-glassBorder hover:border-primary/40 hover:shadow-glass-glow group ${className}`}
    >
      {/* Light glow overlay tracking cursor */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content wrapper with perspective translation */}
      <div style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block">
              About Me
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight">
              Designing the Future with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI & ML</span>
            </h2>
          </div>
          <p className="max-w-md text-textMuted text-sm md:text-base font-medium">
            I am a technologist passionate about engineering products at the intersection of complex algorithms and elegant user experiences.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid layout */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: AI & ML Student (Spans 2 cols on md+) */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <TiltCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-primary text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF] flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-2xl text-textLight mb-4">
                  AI & ML Student
                </h3>
                <p className="text-textMuted leading-relaxed text-sm md:text-base">
                  Currently pursuing a Bachelor of Technology specializing in Artificial Intelligence and Machine Learning at Lovely Professional University (LPU) (started August 2024). My academic journey involves deep-diving into neural networks, reinforcement learning, computer vision, natural language processing, and advanced deep learning cognitive architectures.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                <Award className="w-4 h-4" /> Exploring next-gen foundation models
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Product Builder */}
          <motion.div variants={cardVariants}>
            <TiltCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-accent text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF] flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-2xl text-textLight mb-4">
                  Product Builder
                </h3>
                <p className="text-textMuted leading-relaxed text-sm">
                  I don't just write algorithms; I bridge them to functional user products. 
                  I focus on latency optimization, vector search indexing, intelligent agent flows, 
                  and building intuitive frontends that make complex AI accessible to anyone.
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 3: Hackathon Competitor */}
          <motion.div variants={cardVariants}>
            <TiltCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-amber-400 text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF] flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-2xl text-textLight mb-4">
                  Hackathon Competitor
                </h3>
                <p className="text-textMuted leading-relaxed text-sm">
                  Active participant in regional and national hackathons. 
                  I love the challenge of taking a complex problem statement, designing an AI-backed pipeline, 
                  and presenting a working prototype within a high-stakes 36-hour sprint.
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 4: Open Source & Community (Spans 2 cols on md+) */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <TiltCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-emerald-400 text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF] flex items-center justify-center mb-6">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-2xl text-textLight mb-4">
                  Open-Source Enthusiast
                </h3>
                <p className="text-textMuted leading-relaxed text-sm md:text-base">
                  Firm believer in open science and collaborative software engineering. 
                  I actively push code, fix issues, and contribute to developer repositories. 
                  Working in public keeps my engineering standards high and keeps me updated on the 
                  fastest-growing libraries in the AI ecosystem.
                </p>
              </div>
              <div className="mt-8 text-xs text-textMuted font-mono">
                $ git commit -m "build: optimize vector retrieval speed by 40%"
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 5: Full-Stack Developer */}
          <motion.div variants={cardVariants} className="md:col-span-3">
            <TiltCard className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="max-w-2xl">
                <div className="w-12 h-12 rounded bg-sky-400 text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF] flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-2xl text-textLight mb-4">
                  Full-Stack Developer
                </h3>
                <p className="text-textMuted leading-relaxed text-sm">
                  Deeply skilled in designing modern user interfaces and backend infrastructures. 
                  From setting up responsive React SPAs with styled glassmorphism layouts to building 
                  scalable Node/Express REST APIs, setting up secure OAuth flows, and designing schemas 
                  for MongoDB and Firebase databases.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-sm">
                {['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Git'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded text-xs font-extrabold bg-white dark:bg-zinc-800 border-2 border-black dark:border-white text-textLight shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
