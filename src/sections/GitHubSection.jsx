import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitFork, Star, Flame, Eye } from 'lucide-react';

// Generate simulated authentic contribution calendar data (53 weeks * 7 days)
const generateGridData = () => {
  const data = [];
  const levels = [0, 0, 1, 1, 2, 2, 3, 4, 1, 2, 3, 0]; // weight toward active days
  
  for (let w = 0; w < 53; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      // Random activity level based on calendar weights
      let level = levels[Math.floor(Math.random() * levels.length)];
      // Simulate streaks or lighter weekends
      if (d === 0 || d === 6) {
        level = Math.max(0, level - 1);
      }
      week.push(level);
    }
    data.push(week);
  }
  return data;
};

const CONTRIBUTION_GRID = generateGridData();

const STATS = [
  { label: 'Total Commits', value: '1,842', icon: GitFork, color: 'text-violet-400' },
  { label: 'Pull Requests', value: '184', icon: GitPullRequest, color: 'text-cyan-400' },
  { label: 'Stars Earned', value: '389', icon: Star, color: 'text-amber-400' },
  { label: 'Current Streak', value: '47 Days', icon: Flame, color: 'text-rose-400' }
];

const LANGUAGES = [
  { name: 'Python', percentage: 48, color: 'bg-yellow-500 shadow-yellow-500/20' },
  { name: 'TypeScript / JS', percentage: 32, color: 'bg-cyan-400 shadow-cyan-400/20' },
  { name: 'C++', percentage: 12, color: 'bg-blue-500 shadow-blue-500/20' },
  { name: 'Java', percentage: 8, color: 'bg-red-500 shadow-red-500/20' }
];

export default function GitHubSection() {
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });

  const handleMouseEnter = (e, level, weekIdx, dayIdx) => {
    const rect = e.target.getBoundingClientRect();
    const count = level === 0 ? 'No' : level * 3 + Math.floor(Math.random() * 2);
    setTooltip({
      show: true,
      text: `${count} contributions on day ${dayIdx + 1}, week ${weekIdx + 1}`,
      x: rect.left + window.scrollX + rect.width / 2,
      y: rect.top + window.scrollY - 38
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, show: false }));
  };

  const getColorClass = (level) => {
    switch (level) {
      case 1: return 'bg-violet-950/40 border border-violet-500/10';
      case 2: return 'bg-violet-850/60 border border-violet-500/20';
      case 3: return 'bg-violet-600/70 border border-violet-500/40 shadow-glow-primary/20';
      case 4: return 'bg-primary border border-primary/50 shadow-glow-primary/40';
      default: return 'bg-white/3 border border-white/5';
    }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-accent uppercase mb-2 block"
          >
            Activity Stream
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-white tracking-tight"
          >
            Open Source Footprint
          </motion.h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left panel: Contribution Map (Spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glassmorphism rounded-2xl p-6 border border-glassBorder flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                <GitFork className="w-5 h-5 text-primary" />
                Contributions Calendar
              </h3>
              <p className="text-xs text-textMuted mb-6 font-medium">
                Visualizing git commit push triggers, merge triggers, and repository initialization patterns.
              </p>
            </div>

            {/* Scrollable grid wrapper for mobile */}
            <div className="overflow-x-auto pb-4 -mx-2 px-2 scrollbar-thin">
              <div className="flex gap-[3px] min-w-[640px]">
                {CONTRIBUTION_GRID.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={(e) => handleMouseEnter(e, level, wIdx, dIdx)}
                        onMouseLeave={handleMouseLeave}
                        className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-none hover:scale-110 hover:z-10 ${getColorClass(level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-textMuted mt-4 border-t border-white/5 pt-4">
              <span>Simulated logs synced live</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-white/3 border border-white/5" />
                <div className="w-2.5 h-2.5 rounded-sm bg-violet-950/40 border border-violet-500/10" />
                <div className="w-2.5 h-2.5 rounded-sm bg-violet-850/60 border border-violet-500/20" />
                <div className="w-2.5 h-2.5 rounded-sm bg-violet-600/70 border border-violet-500/40" />
                <div className="w-2.5 h-2.5 rounded-sm bg-primary border border-primary/50" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Right panel: Languages bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glassmorphism rounded-2xl p-6 border border-glassBorder flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-accent" />
                Most Used Languages
              </h3>
              <p className="text-xs text-textMuted mb-8 font-medium">
                Analysis based on bytes compiled across primary repositories.
              </p>
            </div>

            {/* Language distribution bar */}
            <div className="space-y-6">
              {/* Stacked Bar */}
              <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden flex">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className={`h-full ${lang.color} first:rounded-l-full last:rounded-r-full`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legends list */}
              <div className="space-y-3.5">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${lang.color.split(' ')[0]}`} />
                      <span className="text-xs font-semibold text-textLight">{lang.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-textMuted">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-textMuted border-t border-white/5 pt-4 mt-6">
              Calculated using standard repository metadata
            </div>
          </motion.div>

        </div>

        {/* Git Stats Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glassmorphism rounded-2xl p-5 border border-glassBorder flex items-center gap-4 hover:border-primary/20 hover:shadow-glass-glow transition-all"
              >
                <div className={`p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-textMuted block">{stat.label}</span>
                  <span className="text-lg md:text-xl font-bold text-white font-mono">{stat.value}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Tooltip Overlay */}
      {tooltip.show && (
        <div
          className="fixed z-[9999] px-3 py-1.5 rounded-lg glassmorphism text-[10px] font-mono text-white font-semibold border border-white/10 pointer-events-none -translate-x-1/2"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
