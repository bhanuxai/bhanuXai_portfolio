import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaLinux, FaJava 
} from 'react-icons/fa';
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiTailwindcss, SiExpress, 
  SiMongodb, SiFirebase, SiTensorflow, SiPytorch, SiOpenai, SiGoogle, 
  SiScikitlearn, SiHuggingface, SiPostman, SiVite, SiThreedotjs, SiNumpy, 
  SiPandas, SiFastapi, SiFlask, SiRedux, SiPostgresql 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Layers, Code2, Cpu, Database, Wrench, Sparkles } from 'lucide-react';
import LogoLoop from '../components/LogoLoop';

const SKILL_CATEGORIES = [
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    icon: Layers,
    accentColor: 'text-cyan-500 dark:text-cyan-400',
    badgeBg: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    description: 'Frontend interfaces, backend runtimes, UI styling systems, and 3D graphics engines.',
    spanCols: 'lg:col-span-2',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400', tag: 'Frontend UI' },
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', tag: 'Backend Runtime' },
      { name: 'Express.js', icon: SiExpress, color: 'dark:text-slate-300 text-slate-700', tag: 'REST APIs' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', tag: 'Utility Styling' },
      { name: 'Three.js / R3F', icon: SiThreedotjs, color: 'text-slate-200', tag: '3D WebGL' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500', tag: 'High-Speed APIs' },
      { name: 'Flask', icon: SiFlask, color: 'dark:text-slate-300 text-slate-700', tag: 'AI Microservices' },
      { name: 'Redux Toolkit', icon: SiRedux, color: 'text-purple-500', tag: 'State Management' },
      { name: 'Vite', icon: SiVite, color: 'text-amber-400', tag: 'Fast Bundling' },
    ]
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    icon: Code2,
    accentColor: 'text-amber-500 dark:text-amber-400',
    badgeBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    description: 'Core syntax, algorithms, data structures, and mathematical computation engines.',
    spanCols: 'lg:col-span-1',
    skills: [
      { name: 'Python', icon: SiPython, color: 'text-yellow-500', tag: 'AI / Data / Scripting' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-400', tag: 'Full-Stack Web' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', tag: 'Type-Safe Logic' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', tag: 'DSA & Performance' },
      { name: 'Java', icon: FaJava, color: 'text-red-500', tag: 'OOP Fundamentals' },
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', tag: 'Semantic Markup' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400', tag: 'Modern Layouts' },
    ]
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    icon: Cpu,
    accentColor: 'text-purple-500 dark:text-purple-400',
    badgeBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    description: 'Neural networks, computer vision, natural language processing, and generative AI models.',
    spanCols: 'lg:col-span-1',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', tag: 'Deep Learning' },
      { name: 'PyTorch', icon: SiPytorch, color: 'text-red-600', tag: 'Neural Architectures' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-orange-400', tag: 'Predictive Models' },
      { name: 'OpenAI API & LLMs', icon: SiOpenai, color: 'text-emerald-400', tag: 'Agentic Workflows' },
      { name: 'Gemini API', icon: SiGoogle, color: 'text-blue-400', tag: 'Multimodal AI' },
      { name: 'Hugging Face', icon: SiHuggingface, color: 'text-yellow-500', tag: 'Pretrained Transformers' },
      { name: 'NumPy', icon: SiNumpy, color: 'text-sky-400', tag: 'Vector Computations' },
      { name: 'Pandas', icon: SiPandas, color: 'text-indigo-400', tag: 'Data Engineering' },
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Backend',
    icon: Database,
    accentColor: 'text-emerald-500 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    description: 'Document stores, relational schemas, realtime cloud databases, and API integrations.',
    spanCols: 'lg:col-span-1',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500', tag: 'NoSQL Document DB' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-amber-500', tag: 'Realtime Cloud & Auth' },
      { name: 'PostgreSQL / SQL', icon: SiPostgresql, color: 'text-blue-400', tag: 'Relational Schemas' },
    ]
  },
  {
    id: 'tools',
    name: 'Developer Tools & DevOps',
    icon: Wrench,
    accentColor: 'text-rose-500 dark:text-rose-400',
    badgeBg: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    description: 'Version control systems, containerization, workflow utilities, and API debuggers.',
    spanCols: 'lg:col-span-1',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', tag: 'Version Control' },
      { name: 'GitHub', icon: FaGithub, color: 'text-textLight', tag: 'CI/CD & Open Source' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-400', tag: 'Containerization' },
      { name: 'VS Code', icon: VscVscode, color: 'text-blue-500', tag: 'Development IDE' },
      { name: 'Linux', icon: FaLinux, color: 'dark:text-slate-200 text-slate-700', tag: 'CLI & Bash Shell' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500', tag: 'API Testing & Contracts' },
    ]
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === selectedCategory);

  // Marquee ticker items built from all skills
  const allSkillsTicker = SKILL_CATEGORIES.flatMap(cat => cat.skills).map(s => {
    const Icon = s.icon;
    return {
      title: s.name,
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glassmorphism border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 transition-all select-none">
          <Icon className={`w-5 h-5 ${s.color} shrink-0`} />
          <span className="text-xs font-semibold text-textLight tracking-wide">{s.name}</span>
        </div>
      )
    };
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
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
            className="max-w-2xl mx-auto text-textMuted text-sm md:text-base mt-4 font-medium"
          >
            Categorized technical stack organized by frameworks, programming languages, AI/ML tools, databases, and developer environments.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs md:text-sm font-bold border-2 transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-primary text-black border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF]'
                : 'glassmorphism border-glassBorder text-textMuted hover:text-textLight hover:border-primary/40'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs md:text-sm font-bold border-2 transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-primary text-black border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF]'
                  : 'glassmorphism border-glassBorder text-textMuted hover:text-textLight hover:border-primary/40'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10 font-mono">
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredCategories.map((cat) => {
              const CategoryIcon = cat.icon;
              const isFullWidth = selectedCategory !== 'all' || cat.spanCols === 'lg:col-span-2';

              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`glassmorphism rounded-2xl p-6 md:p-8 border border-glassBorder hover:border-primary/40 transition-all duration-300 flex flex-col justify-between ${
                    isFullWidth ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                >
                  {/* Category Header */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-black dark:bg-white/10 text-primary flex items-center justify-center border border-glassBorder shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF]">
                          <CategoryIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-black text-xl md:text-2xl text-textLight">
                            {cat.name}
                          </h3>
                        </div>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${cat.badgeBg} font-mono shrink-0`}>
                        {cat.skills.length} Skills
                      </span>
                    </div>

                    <p className="text-textMuted text-xs md:text-sm font-medium mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Skill Items Grid */}
                    <div className={`grid gap-3 ${
                      isFullWidth 
                        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' 
                        : 'grid-cols-1 sm:grid-cols-2'
                    }`}>
                      {cat.skills.map((skill) => {
                        const SkillIcon = skill.icon;

                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-glassBorder hover:border-primary/50 hover:bg-white/10 dark:hover:bg-white/[0.07] transition-all duration-200 group cursor-default"
                          >
                            <div className="w-9 h-9 rounded-lg bg-black/5 dark:bg-black/30 border border-glassBorder flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <SkillIcon className={`w-5 h-5 ${skill.color}`} />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-bold text-textLight group-hover:text-primary transition-colors truncate">
                                {skill.name}
                              </span>
                              <span className="text-[11px] text-textMuted font-medium truncate">
                                {skill.tag}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Infinite Live Marquee Ticker at the bottom */}
        <div className="w-full max-w-full overflow-hidden relative pt-6 border-t border-glassBorder">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-textMuted">
              Continuous Live Arsenal Marquee
            </span>
          </div>
          <LogoLoop
            logos={allSkillsTicker}
            speed={28}
            direction="left"
            logoHeight={44}
            gap={20}
            pauseOnHover
            fadeOut
            fadeOutColor="var(--bg-color)"
          />
        </div>

      </div>
    </section>
  );
}
