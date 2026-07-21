import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaLinux, FaJava 
} from 'react-icons/fa';
import { 
  SiPython, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiTensorflow, SiPytorch, SiOpenai, SiGoogle 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import LogoLoop from '../components/LogoLoop';

export default function Skills() {
  const row1 = [
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
    { name: 'PyTorch', icon: SiPytorch, color: 'text-red-600' },
    { name: 'Gemini API', icon: SiGoogle, color: 'text-blue-400' },
    { name: 'OpenAI API', icon: SiOpenai, color: 'text-emerald-400' },
  ].map(s => {
    const Icon = s.icon;
    return {
      title: s.name,
      node: (
        <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glassmorphism border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 transition-all duration-300 select-none">
          <Icon className={`w-6 h-6 ${s.color} shrink-0`} />
          <span className="text-sm font-semibold text-textLight tracking-wide">{s.name}</span>
        </div>
      )
    };
  });

  const row2 = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'dark:text-slate-300 text-slate-600' },
  ].map(s => {
    const Icon = s.icon;
    return {
      title: s.name,
      node: (
        <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glassmorphism border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 transition-all duration-300 select-none">
          <Icon className={`w-6 h-6 ${s.color} shrink-0`} />
          <span className="text-sm font-semibold text-textLight tracking-wide">{s.name}</span>
        </div>
      )
    };
  });

  const row3 = [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-amber-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'GitHub', icon: FaGithub, color: 'text-textLight' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
    { name: 'Linux', icon: FaLinux, color: 'dark:text-slate-200 text-slate-700' },
  ].map(s => {
    const Icon = s.icon;
    return {
      title: s.name,
      node: (
        <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glassmorphism border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 transition-all duration-300 select-none">
          <Icon className={`w-6 h-6 ${s.color} shrink-0`} />
          <span className="text-sm font-semibold text-textLight tracking-wide">{s.name}</span>
        </div>
      )
    };
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Title */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-accent uppercase mb-2 block"
          >
            Technical Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-textMuted text-sm md:text-base mt-4 font-medium"
          >
            A dynamic flow of frameworks, languages, databases, developer tools, and AI/ML parameters I employ.
          </motion.p>
        </div>
      </div>

      {/* Infinite LogoLoop tickers */}
      <div className="flex flex-col gap-6 w-full max-w-full overflow-hidden relative">
        <LogoLoop
          logos={row1}
          speed={30}
          direction="left"
          logoHeight={48}
          gap={24}
          pauseOnHover
          fadeOut
          fadeOutColor="var(--bg-color)"
        />
        <LogoLoop
          logos={row2}
          speed={25}
          direction="right"
          logoHeight={48}
          gap={24}
          pauseOnHover
          fadeOut
          fadeOutColor="var(--bg-color)"
        />
        <LogoLoop
          logos={row3}
          speed={32}
          direction="left"
          logoHeight={48}
          gap={24}
          pauseOnHover
          fadeOut
          fadeOutColor="var(--bg-color)"
        />
      </div>
    </section>
  );
}
