import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { assets } from '../data/assets';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: 'Education',
    title: personalInfo.education.degree,
    sub: personalInfo.education.college,
    date: personalInfo.education.period,
  },
  {
    icon: Award,
    label: 'Academic Merit',
    title: `CGPA ${personalInfo.education.cgpa}`,
    sub: 'Consistent Academic Track Record',
    date: 'Current 2023–2027',
  },
  {
    icon: MapPin,
    label: 'Current Location',
    title: personalInfo.location,
    sub: 'Tamil Nadu, India',
    date: 'Available for Relocation / Remote',
  },
  {
    icon: Target,
    label: 'Career Trajectory',
    title: personalInfo.goal,
    sub: 'Full Stack & Distributed Systems',
    date: 'Actively Interviewing',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-ivory dark:bg-dark-bg relative border-t border-border-subtle dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="editorial-pill bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text">
              01 // Background
            </span>
          </div>
          <h2 className="editorial-title text-4xl sm:text-6xl font-bold tracking-tight text-charcoal dark:text-white uppercase">
            About <span className="editorial-serif italic font-normal text-electric-violet dark:text-soft-lavender">Me</span>
          </h2>
        </AnimatedSection>

        {/* Editorial 2-Column Storytelling Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Expressive Narrative (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection delay={0.1}>
              <p className="text-xl sm:text-2xl font-normal text-charcoal dark:text-dark-text leading-relaxed font-sans">
                I am a B.Tech Information Technology student at{' '}
                <span className="font-semibold text-charcoal dark:text-white underline decoration-electric-violet decoration-2 underline-offset-4">
                  Sri Eshwar College of Engineering
                </span>{' '}
                with hands-on experience in full-stack development, data engineering, and real-world web application development.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-warm-grey dark:text-dark-muted leading-relaxed">
                I have developed a strong foundation in full-stack engineering, data structures, algorithms, and database architecture through internships and intensive academic projects. I thoroughly enjoy transforming complex real-world requirements into clean, user-centric, and scalable digital solutions.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-base sm:text-lg text-warm-grey dark:text-dark-muted leading-relaxed">
                Whether implementing location-verified attendance with geofencing algorithms, orchestrating high-throughput data pipelines using Apache Spark and Kafka, or engineering responsive frontends in React, I am continuously learning and committed to crafting high-impact software.
              </p>
            </AnimatedSection>

            {/* Quick Principles Banner */}
            <AnimatedSection delay={0.4}>
              <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border mt-8 shadow-sm">
                <h4 className="font-display font-bold text-sm tracking-wide uppercase text-charcoal dark:text-white mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-electric-violet" />
                  Engineering Principles
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal/90 dark:text-dark-text/90 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-electric-violet" />
                    <span>Clean & Scalable Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-electric-violet" />
                    <span>User-Centric Minimal Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-electric-violet" />
                    <span>Rigorous Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-electric-violet" />
                    <span>End-to-End Execution</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Bento Cards (Col 8-12) */}
          <div className="lg:col-span-5">
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {HIGHLIGHTS.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="editorial-card p-6 flex flex-col justify-between group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border flex items-center justify-center text-charcoal dark:text-dark-text group-hover:bg-electric-violet group-hover:text-white transition-all duration-300">
                        <item.icon size={18} />
                      </div>
                      <span className="text-[11px] font-mono text-warm-grey dark:text-dark-muted uppercase tracking-wider">
                        {item.date}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-electric-violet dark:text-soft-lavender uppercase tracking-widest font-semibold block mb-1">
                        {item.label}
                      </span>
                      <h3 className="font-display font-bold text-lg text-charcoal dark:text-white mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-warm-grey dark:text-dark-muted font-sans">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
