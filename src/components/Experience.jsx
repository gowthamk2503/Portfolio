import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/experience';
import { AnimatedSection } from './AnimatedSection';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-white dark:bg-dark-card/50 relative border-t border-border-subtle dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="editorial-pill bg-ivory dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text">
              04 // Trajectory
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="editorial-title text-4xl sm:text-6xl font-bold tracking-tight text-charcoal dark:text-white uppercase">
                Work <span className="editorial-serif italic font-normal text-electric-violet dark:text-soft-lavender">Experience</span>
              </h2>
              <p className="text-warm-grey dark:text-dark-muted text-base max-w-xl mt-3">
                Hands-on internship history solving problems across full-stack component systems and high-volume data stream architectures.
              </p>
            </div>
            <span className="text-xs font-mono text-warm-grey dark:text-dark-muted hidden md:inline-block">
              2 Professional Internships
            </span>
          </div>
        </AnimatedSection>

        {/* Vertical Timeline with Progressive Line Draw */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Central Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-border-subtle dark:bg-dark-border hidden sm:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-electric-violet via-soft-lavender to-soft-lime"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark-card border-2 border-electric-violet flex items-center justify-center z-10 shadow-sm hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-electric-violet" />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <AnimatedSection delay={index * 0.15}>
                      <div className="editorial-card p-6 sm:p-8 bg-ivory/50 dark:bg-dark-bg/60 border border-border-subtle dark:border-dark-border hover:bg-white dark:hover:bg-dark-card transition-all group">
                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-bold text-electric-violet dark:text-soft-lavender uppercase tracking-wider">
                            {exp.type}
                          </span>
                          <span className="text-xs font-mono text-warm-grey dark:text-dark-muted flex items-center gap-1.5">
                            <Calendar size={12} /> {exp.date}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal dark:text-white mb-1">
                          {exp.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-mono text-warm-grey dark:text-dark-muted mb-4 flex items-center gap-1.5">
                          <Building2 size={13} className="text-charcoal dark:text-dark-text" />
                          <span>{exp.organization}</span>
                        </p>

                        {/* Bulleted Accomplishments */}
                        <ul className="space-y-2 mb-6">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-warm-grey dark:text-dark-muted font-sans"
                            >
                              <ChevronRight
                                size={14}
                                className="text-electric-violet flex-shrink-0 mt-0.5"
                              />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle/80 dark:border-dark-border">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-xs font-mono text-charcoal dark:text-dark-text"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
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
