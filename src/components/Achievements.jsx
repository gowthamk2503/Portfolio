import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, Code, CheckCircle2, ExternalLink } from 'lucide-react';
import { achievements, certifications } from '../data/achievements';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-ivory dark:bg-dark-bg relative border-t border-border-subtle dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="editorial-pill bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text">
              05 // Honors & Credentials
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="editorial-title text-4xl sm:text-6xl font-bold tracking-tight text-charcoal dark:text-white uppercase">
                Merit & <span className="editorial-serif italic font-normal text-electric-violet dark:text-soft-lavender">Accolades</span>
              </h2>
              <p className="text-warm-grey dark:text-dark-muted text-base max-w-xl mt-3">
                Verified competition distinctions, algorithmic problem-solving benchmarks, and industry certifications.
              </p>
            </div>
            <span className="text-xs font-mono text-warm-grey dark:text-dark-muted hidden md:inline-block">
              5 Distinctions • 5 Certifications
            </span>
          </div>
        </AnimatedSection>

        {/* Top Feature Distinction: NPTEL Elite HCI (99% Score, Top 2%) */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-subtle">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-lime/30 text-charcoal dark:text-dark-text text-xs font-mono mb-4">
                <Star size={13} className="text-charcoal" />
                <span>Top 2% Nationwide Among 23,139 Certified Learners</span>
              </div>
              <h3 className="editorial-title text-2xl sm:text-4xl font-bold text-charcoal dark:text-white mb-2">
                NPTEL Elite Certification — Human Computer Interaction
              </h3>
              <p className="text-warm-grey dark:text-dark-muted text-sm sm:text-base leading-relaxed font-sans">
                Achieved a standout 99% score in the rigorous national examination administered by the Indian Institutes of Technology (IIT), mastering cognitive interaction models, heuristics, and user-centered system architecture.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-4 flex-shrink-0">
              <div className="text-center p-6 rounded-2xl bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border min-w-[130px]">
                <span className="text-4xl sm:text-5xl font-display font-bold text-electric-violet dark:text-soft-lavender block">
                  99%
                </span>
                <span className="text-[11px] font-mono text-warm-grey uppercase tracking-wider block mt-1">
                  National Score
                </span>
              </div>
              <div className="text-center p-6 rounded-2xl bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border min-w-[130px]">
                <span className="text-4xl sm:text-5xl font-display font-bold text-charcoal dark:text-white block">
                  Top 2%
                </span>
                <span className="text-[11px] font-mono text-warm-grey uppercase tracking-wider block mt-1">
                  23,139 Candidates
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Competitive & Expo Distinctions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.slice(0, 4).map((ach, idx) => (
            <AnimatedSection key={ach.id} delay={idx * 0.08}>
              <div className="editorial-card p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-electric-violet dark:text-soft-lavender uppercase tracking-widest font-semibold">
                      #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border text-warm-grey">
                      {ach.category}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-charcoal dark:text-white mb-2 leading-snug">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-warm-grey dark:text-dark-muted leading-relaxed font-sans">
                    {ach.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications Gallery */}
        <AnimatedSection className="mb-8">
          <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-charcoal dark:text-white uppercase mb-2">
            Verified Certifications
          </h3>
          <p className="text-sm font-mono text-warm-grey dark:text-dark-muted">
            Formal technical credentials in Cloud computing, Full-Stack engineering, and Data Structures.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <StaggerItem key={cert.id}>
              <div className="editorial-card p-6 flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-charcoal/80 dark:text-dark-text/80 px-2.5 py-1 rounded-full bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border font-semibold">
                      {cert.year}
                    </span>
                    {cert.badge && (
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display font-bold text-base text-charcoal dark:text-white mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-warm-grey dark:text-dark-muted">
                    {cert.organization}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-subtle dark:border-dark-border flex items-center justify-between text-xs font-mono text-warm-grey">
                  <span>Verified Credential</span>
                  <CheckCircle2 size={14} className="text-electric-violet" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
