import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Brain, Sparkles, ChevronDown, ChevronUp, Layers, Terminal, Cpu, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS_DATA = [
  {
    id: 1,
    category: 'Software Development',
    title: 'Parallax Storytelling',
    subtitle: 'Interactive Narrative & Motion',
    description: 'An immersive storytelling web experience built with smooth parallax scrolling, dynamic layered animations, and 3D web visuals.',
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    github: 'https://github.com/bhanuxai/parallax-storytelling.git',
    live: 'https://parallexstorytelling.netlify.app/',
    previewImage: '/images/previews/Prallax.png',
    domainUrl: 'parallexstorytelling.netlify.app',
    tagBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
  },
  {
    id: 2,
    category: 'Machine Learning',
    title: 'RedRob Candidate Ranking',
    subtitle: 'AI Shortlisting & Resume Scoring',
    description: 'Machine learning pipeline for candidate shortlisting, scoring technical competencies, and ranking applicants with NLP metrics.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Pandas', 'Flask'],
    github: 'https://github.com/bhanuxai/RedRobCandidateRanking-IndiaRuns.git',
    live: 'https://huggingface.co/spaces/BhanuXai/redrob-ai-candidate-intelligence',
    previewImage: '/images/previews/red-robai.png',
    domainUrl: 'huggingface.co/spaces/BhanuXai',
    tagBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30'
  },
  {
    id: 3,
    category: 'Software Development',
    title: 'Smart Logistics & Delivery Intelligence',
    subtitle: 'AI-Powered Delivery Routing & Logistics',
    description: 'An intelligent logistics and delivery management system that optimizes dispatch courier routes, forecasts delivery times, and streamlines order tracking using machine learning integrations.',
    technologies: ['React', 'Vite', 'Node.js', 'Python', 'Scikit-learn', 'Tailwind'],
    github: 'https://github.com/bhanuxai/Smart-Logistics-Delivery-Intelligence.git',
    live: 'https://smart-logistics-delivery-intelligen.vercel.app/',
    previewImage: '/images/previews/connect.png',
    domainUrl: 'smart-logistics-delivery-intelligen.vercel.app',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  },
  {
    id: 4,
    category: 'Software Development',
    title: 'Sectra College Connect',
    subtitle: 'Campus Networking Hub',
    description: 'A modern community platform for university students to share projects, connect with peers, and collaborate on campus events.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/bhanuxai/sectra-college-connect.git',
    live: 'https://sectra-85e9a.web.app/students/dashboard.html',
    previewImage: '/images/previews/sectra.png',
    domainUrl: 'sectra-85e9a.web.app',
    tagBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
  },
  {
    id: 5,
    category: 'Software Development',
    title: 'CodeDrop',
    subtitle: 'Instant Code & Snippet Sharing Utility',
    description: 'Developer tool for instant code snippet creation, real-time syntax highlighting, and quick shareable links.',
    technologies: ['React', 'TypeScript', 'Monaco Editor', 'Tailwind'],
    github: 'https://github.com/bhanuxai/codedrop.git',
    live: 'https://codedropp.onrender.com/',
    previewImage: '/images/previews/codedrop.png',
    domainUrl: 'codedropp.onrender.com',
    tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
  },
  {
    id: 6,
    category: 'Software Development',
    title: 'Apeiron',
    subtitle: 'Modern Web Design & Interactive UI',
    description: 'Premium web interface featuring smooth micro-animations, glassmorphism design system, and sleek dark mode aesthetics.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/bhanuxai/Apeiron.git',
    live: 'https://aetheris-one-plum.vercel.app/',
    previewImage: '/images/previews/aperion.png',
    domainUrl: 'aetheris-one-plum.vercel.app',
    tagBg: 'bg-violet-500/10 text-violet-400 border-violet-500/30'
  },
  {
    id: 7,
    category: 'Software Development',
    title: 'Global Barite V2',
    subtitle: 'Industrial Enterprise Website',
    description: 'High-performance corporate showcase built for global mineral suppliers with responsive product catalogs and dynamic inquiries.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    github: 'https://github.com/bhanuxai/globalbaritev2.git',
    live: 'https://www.globalbarites.com/',
    previewImage: '/images/previews/globalbarites.png',
    domainUrl: 'globalbarites.com',
    tagBg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
  },
  {
    id: 8,
    category: 'Software Development',
    title: 'LPU TGPA/CGPA Calculator',
    subtitle: 'University Academic Grade Estimator',
    description: 'Utility web app designed for students to easily calculate semester TGPA/CGPA, forecast grades, and track academic targets.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    github: 'https://github.com/bhanuxai/lputgpacalculatorcodewithbss.git',
    live: 'https://sectralputgpacalculator.netlify.app/',
    previewImage: '/images/previews/tgpacalculator.png',
    domainUrl: 'sectralputgpacalculator.netlify.app',
    tagBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
  },
  {
    id: 9,
    category: 'Software Development',
    title: 'Clutch',
    subtitle: 'Dynamic E-Commerce Showcase',
    description: 'Sleek web application with interactive product customizer, cart management, and seamless UI transitions.',
    technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/bhanuxai/Clutch.git',
    live: 'https://clutch-20540114090.asia-southeast1.run.app/',
    previewImage: '/images/previews/connect.png',
    domainUrl: 'clutch-20540114090.asia-southeast1.run.app',
    tagBg: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30'
  },
  {
    id: 10,
    category: 'Software Development',
    title: 'Nisarg Srishti Foundation',
    subtitle: 'NGO Portal & Community Welfare',
    description: 'Full-featured NGO website featuring impact stories, donation drives, volunteer registration, and awareness campaigns.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5'],
    github: 'https://github.com/bhanuxai/Nisarg-Srishti-Welfare-Foundation-NSWF-.git',
    live: 'https://nisarg-srishti-welfare-foundation-n-sandy.vercel.app/wikipedia_preview.html',
    previewImage: '/images/previews/nswf.png',
    domainUrl: 'nisarg-srishti-welfare-foundation-n-sandy.vercel.app',
    tagBg: 'bg-green-500/10 text-green-400 border-green-500/30'
  },
  {
    id: 11,
    category: 'Software Development',
    title: 'Cyborg Landing Page',
    subtitle: 'Cyberpunk Gaming & Esports Portal',
    description: 'Dark futuristic landing page built with glowing neon accents, hero banners, and interactive game library cards.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/bhanuxai/Cyborg-Themed-Landing-Page.git',
    live: 'https://cyborg-themed-landing-site.vercel.app/',
    previewImage: '/images/previews/cyberthemed.png',
    domainUrl: 'cyborg-themed-landing-site.vercel.app',
    tagBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { label: 'All Projects', value: 'All', icon: Layers },
    { label: 'Software Development', value: 'Software Development', icon: Code2 },
    { label: 'Machine Learning', value: 'Machine Learning', icon: Brain }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  const INITIAL_COUNT = 6;
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);
  const hasMore = filteredProjects.length > INITIAL_COUNT;

  const handleCategoryChange = (categoryValue) => {
    setActiveCategory(categoryValue);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
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
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
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
            A collection of production software solutions, machine learning pipelines, and full-stack software products.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-primary text-black border-primary shadow-[0_0_20px_rgba(255,215,0,0.3)] scale-105'
                    : 'glassmorphism text-textMuted border-white/10 hover:text-textLight hover:border-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-primary'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group glassmorphism rounded-2xl border border-glassBorder overflow-hidden hover:border-primary/40 transition-all duration-500 flex flex-col h-full hover:shadow-glass-glow"
                >
                  {/* Browser Window Frame Header & Live Preview Screenshot */}
                  <div className="h-52 relative overflow-hidden bg-black/40 border-b border-glassBorder flex flex-col">
                    
                    {/* Browser Window Header Bar */}
                    <div className="px-4 py-2 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between z-20 shrink-0">
                      {/* Window Traffic Dots */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      </div>

                      {/* Mock Browser URL Pill */}
                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-textMuted font-mono truncate max-w-[170px]">
                        <Globe className="w-2.5 h-2.5 text-primary shrink-0" />
                        <span className="truncate">{project.domainUrl}</span>
                      </div>

                      {/* Category Tag Badge */}
                      <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider border ${project.tagBg}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Screenshot Preview Image */}
                    <div className="relative flex-grow overflow-hidden bg-zinc-950 flex items-center justify-center">
                      <img
                        src={project.previewImage}
                        alt={`${project.title} live website preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Subtle hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Project Info Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5 block">
                      {project.subtitle}
                    </span>
                    
                    <h3 className="font-display font-bold text-xl text-textLight mb-3 group-hover:text-primary transition-colors">
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
                          className="px-2.5 py-1 rounded bg-white/5 border border-glassBorder text-[10px] font-semibold text-textLight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card Action Buttons */}
                    <div className="flex items-center gap-4 mt-auto pt-2 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-textMuted hover:text-white transition-colors cursor-pointer"
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                      </a>
                      
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-cyan-300 transition-colors ml-auto cursor-pointer"
                      >
                        Preview App
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More Projects Button */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white/5 text-textLight border border-white/10 hover:border-primary/50 hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              <span>{showAll ? 'Show Less' : `View More Projects (${filteredProjects.length - INITIAL_COUNT} More)`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
