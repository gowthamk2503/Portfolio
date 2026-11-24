import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, allSkills } from '../data/skills';
import { getSkillIcon } from '../utils/skillIcons';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { Layers, Server, Database, Code2, Wrench, Cloud, Sparkles } from 'lucide-react';

const CATEGORY_META = {
  all: { label: 'All Technologies', icon: Sparkles, count: 32 },
  frontend: { label: 'Frontend & Mobile', icon: Layers, count: 7 },
  backend: { label: 'Backend & APIs', icon: Server, count: 9 },
  databases: { label: 'Databases', icon: Database, count: 4 },
  languages: { label: 'Programming', icon: Code2, count: 5 },
  tools: { label: 'Dev Tools', icon: Wrench, count: 7 },
  'data-cloud': { label: 'Data & Cloud', icon: Cloud, count: 5 },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? allSkills
      : skillCategories.find((c) => c.id === activeTab)?.skills.map((s) => ({ ...s, category: activeTab })) || [];

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-white dark:bg-dark-card/50 relative border-t border-border-subtle dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="editorial-pill bg-ivory dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text">
              02 // Capabilities
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="editorial-title text-4xl sm:text-6xl font-bold tracking-tight text-charcoal dark:text-white uppercase">
                Technical <span className="editorial-serif italic font-normal text-electric-violet dark:text-soft-lavender">Arsenal</span>
              </h2>
              <p className="text-warm-grey dark:text-dark-muted text-base max-w-xl mt-3">
                Full-stack engineering capabilities spanning modern component architecture, distributed data pipelines, secure authentication, and cloud infrastructure.
              </p>
            </div>

            {/* Total Count Badge */}
            <div className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-ivory dark:bg-dark-card border border-border-subtle dark:border-dark-border text-xs font-mono text-charcoal dark:text-dark-text self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-soft-lime" />
              <span>32 Production-Ready Skills</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filters Ribbon */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-3xl bg-ivory/80 dark:bg-dark-bg/80 border border-border-subtle dark:border-dark-border w-fit">
            {Object.entries(CATEGORY_META).map(([id, meta]) => {
              const Icon = meta.icon;
              const isActive = activeTab === id;

              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium font-sans transition-all duration-200 ${
                    isActive
                      ? 'bg-charcoal text-white dark:bg-white dark:text-charcoal shadow-sm font-semibold'
                      : 'text-warm-grey dark:text-dark-muted hover:text-charcoal dark:hover:text-white'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'text-soft-lime dark:text-electric-violet' : ''} />
                  <span>{meta.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-white/20 dark:bg-charcoal/20 text-white dark:text-charcoal'
                        : 'bg-black/5 dark:bg-white/5 text-warm-grey'
                    }`}
                  >
                    {meta.count}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Bento Grid Representation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
          >
            {filteredSkills.map((skill, index) => {
              const iconData = getSkillIcon(skill.icon);

              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-2xl bg-ivory/50 dark:bg-dark-bg/50 border border-border-subtle dark:border-dark-border hover:bg-white dark:hover:bg-dark-card hover:border-electric-violet/40 dark:hover:border-soft-lavender/40 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                      {iconData.emoji}
                    </span>
                    <span className="text-[10px] font-mono text-warm-grey/60 dark:text-dark-muted uppercase">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-sm text-charcoal dark:text-white group-hover:text-electric-violet dark:group-hover:text-soft-lavender transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-warm-grey dark:text-dark-muted uppercase tracking-wider block mt-0.5">
                      {skill.category || activeTab}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Bento Highlight Box */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="p-8 rounded-3xl bg-charcoal text-white dark:bg-dark-bg border border-white/10 dark:border-dark-border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative z-10 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-soft-lime">
                Continuous Competency
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                200+ LeetCode & 250+ SkillRack Algorithmic Problems Solved
              </h3>
              <p className="text-white/70 text-sm mt-2 font-sans">
                Strong analytical foundation in Data Structures, Graphs, Dynamic Programming, and high-efficiency algorithmic implementation.
              </p>
            </div>
            <div className="flex items-center gap-3 relative z-10 flex-shrink-0">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-3xl font-display font-bold text-soft-lime">8.22</span>
                <span className="block text-[10px] font-mono text-white/60 uppercase">SECE CGPA</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-3xl font-display font-bold text-soft-lavender">99%</span>
                <span className="block text-[10px] font-mono text-white/60 uppercase">NPTEL Elite</span>
              </div>
            </div>
            {/* Ambient decorative glow */}
            <div className="absolute right-0 top-0 bottom-0 w-96 bg-electric-violet/20 blur-[100px] pointer-events-none" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
