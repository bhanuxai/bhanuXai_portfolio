import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, Sparkles, FileText, BarChart2, Truck, CheckSquare } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'DoNext AI',
    subtitle: 'AI-Powered Task Orchestrator',
    description: 'An intelligent planner that analyzes team velocity, predicts delivery bottlenecks using machine learning, and sequences tasks based on dynamic dependency trees.',
    technologies: ['React', 'Framer Motion', 'Node.js', 'TensorFlow.js'],
    github: 'https://github.com/bhanuxai/donext-ai',
    live: 'https://donext-ai.vercel.app',
    banner: (
      <div className="w-full h-full bg-gradient-to-br from-violet-600/30 to-indigo-900/40 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="flex flex-col gap-2.5 w-3/4 p-4 rounded-xl glassmorphism border border-white/10 shadow-lg relative z-10">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <CheckSquare className="w-4 h-4 text-primary" />
            <span className="text-[10px] uppercase tracking-wider text-textLight font-mono">Task Sequence Planner</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-3/4 rounded bg-primary/40 animate-pulse" />
            <div className="h-2 w-1/2 rounded bg-accent/40" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Sectra',
    subtitle: 'Zero-Trust Threat Analytics',
    description: 'A cyber threat visualization platform that tracks network packet routes in real-time, detecting anomalies using isolation forests and sequence-to-sequence LSTM models.',
    technologies: ['React', 'GSAP', 'Python', 'FastAPI', 'PyTorch'],
    github: 'https://github.com/bhanuxai/sectra',
    live: 'https://sectra-sec.vercel.app',
    banner: (
      <div className="w-full h-full bg-gradient-to-br from-red-950/20 to-cyan-900/30 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative w-36 h-36 border border-white/5 rounded-full flex items-center justify-center">
          <div className="absolute inset-2 border border-cyan-500/10 rounded-full animate-spin-slow" />
          <div className="absolute inset-6 border border-primary/20 rounded-full animate-pulse-slow" />
          <Shield className="w-10 h-10 text-cyan-400 absolute" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-500/20 animate-pulse" />
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Resume Analyzer',
    subtitle: 'Automated CV Semantic Parser',
    description: 'An HR analytics model that parses candidate CVs using optical character recognition, extracts key skill vectors, and scores them against JDs using cosine semantic similarity.',
    technologies: ['React', 'Gemini API', 'Python', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/bhanuxai/resume-analyzer',
    live: 'https://cv-analyser.vercel.app',
    banner: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-950/20 to-teal-900/30 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="w-3/5 p-4 rounded-xl glassmorphism border border-white/10 shadow-lg relative z-10 flex items-center gap-4">
          <FileText className="w-12 h-12 text-emerald-400 shrink-0" />
          <div className="flex-grow space-y-2">
            <div className="h-2.5 w-full bg-emerald-400/20 rounded" />
            <div className="h-1.5 w-5/6 bg-white/10 rounded" />
            <div className="h-1.5 w-2/3 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Candidate Ranking AI',
    subtitle: 'Deep Match Recruitment Engine',
    description: 'A candidate shortlisting orchestrator that maps multi-modal data including speech patterns and transcription sentiment scores using advanced Transformer pipelines.',
    technologies: ['React', 'PyTorch', 'OpenAI API', 'Express', 'MongoDB'],
    github: 'https://github.com/bhanuxai/candidate-ranking-ai',
    live: 'https://ranking-ai.vercel.app',
    banner: (
      <div className="w-full h-full bg-gradient-to-br from-amber-950/20 to-purple-900/30 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="w-2/3 p-4 rounded-xl glassmorphism border border-white/10 shadow-lg relative z-10 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-amber-400 font-bold uppercase font-mono tracking-widest">Candidate Rank</span>
            <Sparkles className="w-3 h-3 text-amber-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-white border-b border-white/5 pb-1">
              <span>John Doe</span>
              <span className="text-amber-400 font-bold">98.2%</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-textMuted">
              <span>Jane Smith</span>
              <span>89.5%</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'UniDelivery',
    subtitle: 'Campus Drone Logistics Core',
    description: 'A delivery routing optimization engine that dynamically solves spatial path problems for drone fleets, minimizing fuel burn and delivery latency across campus.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'Mapbox API'],
    github: 'https://github.com/bhanuxai/unidelivery',
    live: 'https://unidelivery.vercel.app',
    banner: (
      <div className="w-full h-full bg-gradient-to-br from-blue-950/20 to-cyan-900/30 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative w-40 h-24 border border-white/10 rounded-xl glassmorphism flex items-center justify-center overflow-hidden">
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <Truck className="w-3 h-3 text-blue-400" />
            <span className="text-[8px] font-mono text-blue-400 uppercase">Route optimization</span>
          </div>
          {/* Mock Map Vector */}
          <svg className="w-full h-3/4 absolute bottom-0 opacity-40" viewBox="0 0 100 50">
            <path d="M10,40 L40,15 L70,35 L90,10" fill="none" stroke="#00d2ff" strokeWidth="2" />
            <circle cx="10" cy="40" r="3" fill="#ff007f" />
            <circle cx="40" cy="15" r="3" fill="#7C3AED" />
            <circle cx="70" cy="35" r="3" fill="#7C3AED" />
            <circle cx="90" cy="10" r="3" fill="#06B6D4" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: 'Online Voting System',
    subtitle: 'Decentralized Blockchain Balloting',
    description: 'A tamper-proof digital voting interface utilizing cryptographic hashes, secure wallet signing, and consensus-driven tallies to guarantee transparent audit logs.',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethers.js', 'Tailwind'],
    github: 'https://github.com/bhanuxai/online-voting-system',
    live: 'https://voting-blockchain.vercel.app',
    banner: (
      <div className="w-full h-full bg-gradient-to-br from-fuchsia-950/20 to-violet-900/30 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="w-3/5 p-4 rounded-xl glassmorphism border border-white/10 shadow-lg relative z-10 flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-1">
            <span className="text-fuchsia-400">BLOCKCHAIN SECURE</span>
            <span className="text-emerald-400">Active</span>
          </div>
          <div className="flex items-center gap-3 py-1">
            <BarChart2 className="w-8 h-8 text-fuchsia-500 shrink-0" />
            <div className="flex-grow space-y-1.5">
              <div className="h-1.5 w-full bg-fuchsia-400/30 rounded" />
              <div className="h-1.5 w-2/3 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block"
          >
            Engineering Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-textMuted text-sm md:text-base mt-4 font-medium"
          >
            A collection of production-ready systems, AI pipeline integrations, and full-stack software products.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group glassmorphism rounded-2xl border border-glassBorder overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col h-full hover:shadow-glass-glow"
            >
              {/* Project Banner Area */}
              <div className="h-48 border-b border-glassBorder overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                {project.banner}
              </div>

              {/* Project Info Area */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5 block">
                  {project.subtitle}
                </span>
                
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-textMuted text-xs md:text-sm leading-relaxed mb-6 flex-grow font-medium">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 rounded bg-white/3 border border-white/5 text-[10px] font-semibold text-textLight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-textMuted hover:text-white transition-colors cursor-none"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-cyan-300 transition-colors ml-auto cursor-none"
                  >
                    Live Demo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
