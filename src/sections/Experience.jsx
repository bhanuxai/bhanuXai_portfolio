import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, BrainCircuit, Briefcase, Trophy, GitMerge, Cpu } from 'lucide-react';

const TIMELINE_DATA = [
  {
    id: 1,
    title: 'Started B.Tech',
    date: '2024 - Present',
    icon: GraduationCap,
    color: 'text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-950/30 border-violet-500',
    description: 'Began undergraduate studies in Computer Science and Engineering, specializing in AI & Machine Learning at Lovely Professional University. Focused on computer science core concepts, math foundations, and algorithmic problem-solving.'
  },
  {
    id: 2,
    title: 'Software Development',
    date: 'Early 2024',
    icon: Terminal,
    color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/30 border-cyan-500',
    description: 'Mastered modern full-stack development, scalable software design, and API engineering using React, Node.js, and Vite. Focused on building clean, accessible, scalable, and high-performance software systems.'
  },
  {
    id: 3,
    title: 'Started AI Journey',
    date: 'Mid 2024',
    icon: BrainCircuit,
    color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/30 border-indigo-500',
    description: 'Deep-dived into core AI/ML mechanics, training data pipelines, feature selection, and optimization methodologies. Engineered first custom prediction structures with NumPy and Scikit-Learn.'
  },
  {
    id: 4,
    title: 'Built Multiple Projects',
    date: 'Late 2024',
    icon: Briefcase,
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/30 border-emerald-500',
    description: 'Engineered full-stack applications with AI backend processors. Built and deployed custom semantic CV scrapers, cloud document engines, and drone route simulation utilities.'
  },
  {
    id: 5,
    title: 'Machine Learning Engineer Intern',
    date: '2025',
    icon: Cpu,
    color: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/30 border-blue-500',
    description: 'Worked on end-to-end machine learning pipelines including data preprocessing, feature engineering, predictive modeling, and model evaluation. Designed and deployed scalable machine learning inference endpoints and microservices.'
  },
  {
    id: 6,
    title: 'Hackathons',
    date: '2025',
    icon: Trophy,
    color: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/30 border-amber-500',
    description: 'Participated in fast-paced code sprints and hackathons. Collaborated in small groups to build, test, and present functional AI prototypes addressing real-world issues under tight time constraints.'
  },
  {
    id: 7,
    title: 'Open Source Contributions',
    date: '2025 - Present',
    icon: GitMerge,
    color: 'text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/30 border-rose-500',
    description: 'Actively contributing to open-source software and tools on GitHub. Reviewing PRs, optimizing runtime scripts, and writing documentation to help grow the developer ecosystem.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-accent uppercase mb-2 block"
          >
            My Timeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
          >
            Experience &amp; Milestones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-textMuted text-sm md:text-base mt-4 font-medium"
          >
            A chronological roadmap showing how I built my skills, engineered projects, and contributed to the tech community.
          </motion.p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line (Desktop: center, Mobile: left side) */}
          <div className="absolute left-8 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-[1px] timeline-line opacity-30" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {TIMELINE_DATA.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Left Side Content (Desktop: even items left, odd items empty) */}
                  <div className={`w-full md:w-1/2 pr-8 pl-16 md:pl-0 md:pr-16 text-left md:text-right ${isEven ? 'block' : 'md:opacity-0 pointer-events-none hidden md:block'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="glassmorphism rounded-2xl p-6 border border-glassBorder hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="text-xs font-mono font-bold text-primary tracking-widest">{item.date}</span>
                        <h3 className="font-display font-bold text-xl text-textLight mt-1.5 mb-3">{item.title}</h3>
                        <p className="text-textMuted text-xs md:text-sm leading-relaxed font-medium">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Timeline Bullet (Desktop: centered, Mobile: aligned left at 32px) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-[20px] z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                      className={`w-10 h-10 rounded-none border-[3px] border-black dark:border-white flex items-center justify-center ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Right Side Content (Desktop: odd items right, even items empty) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-16 text-left ${!isEven ? 'block' : 'md:opacity-0 pointer-events-none hidden md:block'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="glassmorphism rounded-2xl p-6 border border-glassBorder hover:border-accent/30 transition-all duration-300"
                      >
                        <span className="text-xs font-mono font-bold text-accent tracking-widest">{item.date}</span>
                        <h3 className="font-display font-bold text-xl text-textLight mt-1.5 mb-3">{item.title}</h3>
                        <p className="text-textMuted text-xs md:text-sm leading-relaxed font-medium">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
