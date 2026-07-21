import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitFork, Star, Flame, Eye } from 'lucide-react';

// Generates an initial empty grid for rendering before the API data loads
// Aligned to start on a Sunday so weekday rows match perfectly
const generateEmptyGrid = () => {
  const grid = [];
  const startDay = new Date();
  startDay.setDate(startDay.getDate() - 371);
  // Align to nearest Sunday
  while (startDay.getDay() !== 0) {
    startDay.setDate(startDay.getDate() - 1);
  }
  for (let w = 0; w < 53; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const current = new Date(startDay);
      current.setDate(startDay.getDate() + (w * 7 + d));
      week.push({
        date: current.toISOString().split('T')[0],
        count: 0,
        level: 0
      });
    }
    grid.push(week);
  }
  return grid;
};

// Calculates current consecutive streak from contributions list
const calculateStreak = (contributionsList) => {
  if (!contributionsList || contributionsList.length === 0) return 0;
  
  // Sort descending by date
  const sortedDesc = [...contributionsList].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  let startIndex = sortedDesc.findIndex(day => day.count > 0);
  if (startIndex === -1) return 0;
  
  // Check if the most recent contribution was in the last 2 days
  const mostRecentDate = new Date(sortedDesc[startIndex].date);
  const diffTime = Math.abs(new Date() - mostRecentDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays > 2) {
    return 0; // Streak broken
  }
  
  let streak = 0;
  for (let i = startIndex; i < sortedDesc.length; i++) {
    if (sortedDesc[i].count > 0) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
};

const DEFAULT_LANGUAGES = [
  { name: 'JavaScript', percentage: 28, color: 'bg-cyan-400 shadow-cyan-400/20' },
  { name: 'Python', percentage: 32, color: 'bg-yellow-500 shadow-yellow-500/20' },
  { name: 'HTML', percentage: 20, color: 'bg-emerald-500 shadow-emerald-500/20' },
  { name: 'CSS', percentage: 12, color: 'bg-rose-500 shadow-rose-500/20' }
];

export default function GitHubSection() {
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
  const [contributionsGrid, setContributionsGrid] = useState(() => generateEmptyGrid());
  const [languages, setLanguages] = useState(DEFAULT_LANGUAGES);
  const [stats, setStats] = useState([
    { label: 'Total Commits', value: '372', icon: GitFork, color: 'text-violet-400' },
    { label: 'Pull Requests', value: '3', icon: GitPullRequest, color: 'text-cyan-400' },
    { label: 'Stars Earned', value: '4', icon: Star, color: 'text-amber-400' },
    { label: 'Current Streak', value: '0 Days', icon: Flame, color: 'text-rose-400' }
  ]);
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    // 1. Fetch contributions calendar (using CORS-free community proxy)
    fetch('https://github-contributions-api.jogruber.de/v4/bhanuxai')
      .then(res => res.json())
      .then(data => {
        if (data && data.contributions) {
          const sorted = [...data.contributions].sort((a, b) => new Date(a.date) - new Date(b.date));
          
          // Find the nearest Sunday around 371 days ago (53 weeks ago) to align the week columns
          let startIdx = sorted.length - 371;
          while (startIdx > 0) {
            const dayOfWeek = new Date(sorted[startIdx].date).getDay();
            if (dayOfWeek === 0) {
              break;
            }
            startIdx--;
          }
          
          const alignedList = sorted.slice(startIdx);
          const grid = [];
          for (let i = 0; i < alignedList.length; i += 7) {
            const week = alignedList.slice(i, i + 7);
            if (week.length === 7) {
              grid.push(week);
            }
          }
          setContributionsGrid(grid);

          // Get total contributions count as a proxy for total commits/contributions
          const totalCommits = data.total ? Object.values(data.total).reduce((sum, val) => sum + val, 0) : 372;
          
          // Calculate streak
          const streak = calculateStreak(data.contributions);

          setStats(prev => prev.map(s => {
            if (s.label === 'Total Commits') return { ...s, value: totalCommits.toLocaleString() };
            if (s.label === 'Current Streak') return { ...s, value: `${streak} Days` };
            return s;
          }));
          setIsSynced(true);
        }
      })
      .catch(err => {
        console.error("Error fetching contributions:", err);
      });

    // 2. Fetch repo statistics and languages
    fetch('https://api.github.com/users/bhanuxai/repos?per_page=100')
      .then(res => res.json())
      .then(repos => {
        if (Array.isArray(repos)) {
          const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
          
          setStats(prev => prev.map(s => {
            if (s.label === 'Stars Earned') return { ...s, value: stars.toString() };
            return s;
          }));

          const langCounts = {};
          let totalWithLang = 0;
          repos.forEach(r => {
            const lang = r.language;
            if (lang) {
              langCounts[lang] = (langCounts[lang] || 0) + 1;
              totalWithLang++;
            }
          });

          const colorMapping = {
            'Python': 'bg-yellow-500 shadow-yellow-500/20',
            'JavaScript': 'bg-cyan-400 shadow-cyan-400/20',
            'TypeScript': 'bg-indigo-500 shadow-indigo-500/20',
            'HTML': 'bg-emerald-500 shadow-emerald-500/20',
            'CSS': 'bg-rose-500 shadow-rose-500/20',
            'Java': 'bg-red-500 shadow-red-500/20',
            'C++': 'bg-blue-500 shadow-blue-500/20',
          };
          
          const defaultColors = [
            'bg-blue-500 shadow-blue-500/20',
            'bg-purple-500 shadow-purple-500/20',
            'bg-amber-500 shadow-amber-500/20',
            'bg-pink-500 shadow-pink-500/20'
          ];
          
          let idx = 0;
          const parsedLangs = Object.entries(langCounts)
            .map(([name, count]) => {
              const percentage = Math.round((count / totalWithLang) * 100);
              const color = colorMapping[name] || defaultColors[idx++ % defaultColors.length];
              return { name, percentage, color };
            })
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 4);

          if (parsedLangs.length > 0) {
            setLanguages(parsedLangs);
          }
        }
      })
      .catch(err => console.error("Error fetching repos:", err));

    // 3. Fetch search API for PRs count
    fetch('https://api.github.com/search/issues?q=author:bhanuxai+type:pr')
      .then(res => res.json())
      .then(searchData => {
        if (searchData && typeof searchData.total_count === 'number') {
          setStats(prev => prev.map(s => {
            if (s.label === 'Pull Requests') return { ...s, value: searchData.total_count.toString() };
            return s;
          }));
        }
      })
      .catch(err => console.error("Error fetching PR stats:", err));
  }, []);

  const handleMouseEnter = (e, count, date) => {
    const rect = e.target.getBoundingClientRect();
    const formattedDate = new Date(date).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    setTooltip({
      show: true,
      text: `${count === 0 ? 'No' : count} contributions on ${formattedDate}`,
      x: rect.left + window.scrollX + rect.width / 2,
      y: rect.top + window.scrollY - 38
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, show: false }));
  };

  const getColorClass = (level) => {
    switch (level) {
      case 1:
        return 'bg-[#9be9a8] border border-[#8bdba3]/40 dark:bg-[#0e4429] dark:border-[#0d3f26]/40';
      case 2:
        return 'bg-[#40c463] border border-[#3bb35b]/40 dark:bg-[#006d32] dark:border-[#005c2a]/40';
      case 3:
        return 'bg-[#30a14e] border border-[#2a8e45]/40 dark:bg-[#26a641] dark:border-[#21923a]/40';
      case 4:
        return 'bg-[#216e39] border border-[#1b5b2e]/40 dark:bg-[#39d353] dark:border-[#33bd4a]/40';
      default:
        return 'bg-[#ebedf0] border border-[#d1d5db]/30 dark:bg-[#161b22] dark:border-[#30363d]/30';
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
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
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
              <h3 className="font-display font-bold text-lg text-textLight mb-2 flex items-center gap-2">
                <GitFork className="w-5 h-5 text-primary" />
                Contributions Calendar
              </h3>
              <p className="text-xs text-textMuted mb-6 font-medium">
                Visualizing git commit push triggers, merge triggers, and repository initialization patterns.
              </p>
            </div>

            {/* Scrollable grid wrapper for mobile */}
            <div className="overflow-x-auto pb-4 -mx-2 px-2 scrollbar-thin">
              <div className="flex gap-[3px] min-w-[660px] items-start">
                {/* Weekday labels sidebar */}
                <div className="flex flex-col justify-between h-[116px] pr-2 text-[9px] text-textMuted font-sans select-none pt-[3px] shrink-0 font-medium">
                  <span></span>
                  <span>Mon</span>
                  <span></span>
                  <span>Wed</span>
                  <span></span>
                  <span>Fri</span>
                  <span></span>
                </div>

                {contributionsGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={(e) => handleMouseEnter(e, day.count, day.date)}
                        onMouseLeave={handleMouseLeave}
                        className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-pointer hover:scale-110 hover:z-10 ${getColorClass(day.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-textMuted mt-4 border-t border-white/5 pt-4">
              <span>{isSynced ? "Real-time logs synced dynamically" : "Simulated logs syncing..."}</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-[#ebedf0] border border-[#d1d5db]/30 dark:bg-[#161b22] dark:border-[#30363d]/30" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#9be9a8] border border-[#8bdba3]/40 dark:bg-[#0e4429] dark:border-[#0d3f26]/40" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#40c463] border border-[#3bb35b]/40 dark:bg-[#006d32] dark:border-[#005c2a]/40" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#30a14e] border border-[#2a8e45]/40 dark:bg-[#26a641] dark:border-[#21923a]/40" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#216e39] border border-[#1b5b2e]/40 dark:bg-[#39d353] dark:border-[#33bd4a]/40" />
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
              <h3 className="font-display font-bold text-lg text-textLight mb-2 flex items-center gap-2">
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
                {languages.map((lang) => (
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
                {languages.map((lang) => (
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
          {stats.map((stat, idx) => {
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
                  <span className="text-lg md:text-xl font-bold text-textLight font-mono">{stat.value}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Tooltip Overlay */}
      {tooltip.show && (
        <div
          className="fixed z-[9999] px-3 py-1.5 rounded-lg glassmorphism text-[10px] font-mono text-textLight font-semibold border border-glassBorder pointer-events-none -translate-x-1/2"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
