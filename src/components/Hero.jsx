import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDownRight, Download, Terminal, Sparkles, ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { assets } from '../data/assets';
import { GithubIcon, LinkedinIcon } from '../utils/socialIcons';

function AnimatedCounter({ value, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const target = parseFloat(value);
    const start = Date.now();
    const isFloat = value.toString().includes('.');

    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = target * ease;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }, [inView, value, duration]);

  const formatted = value.toString().includes('.')
    ? count.toFixed(2)
    : Math.floor(count).toString();

  return (
    <span ref={ref} className="font-display font-bold">
      {formatted}{suffix}
    </span>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-12 flex flex-col justify-center overflow-hidden bg-ivory dark:bg-dark-bg bg-noise"
    >
      {/* Background Architectural Watermark with Soft Sunlight Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.04] overflow-hidden">
        <img
          src={assets.heroBackground}
          alt="Architectural texture"
          className="w-full h-full object-cover filter grayscale contrast-125 scale-105"
        />
      </div>

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-electric-violet/10 dark:bg-electric-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-soft-lime/15 dark:bg-soft-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Editorial Content (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border w-fit mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-violet opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-violet" />
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-charcoal/80 dark:text-dark-text/80 uppercase">
                Available for Software Engineering Opportunities
              </span>
            </motion.div>

            {/* Editorial Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-title text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-charcoal dark:text-white mb-6 uppercase"
            >
              Hello,
              <br />
              <span className="text-charcoal dark:text-white">I'm Gowtham K.</span>
              <br />
              <span className="text-warm-grey/70 dark:text-dark-muted font-normal">I build </span>
              <span className="editorial-serif font-normal italic text-electric-violet dark:text-soft-lavender normal-case">
                Digital
              </span>{' '}
              <br className="hidden sm:inline" />
              <span>Experiences.</span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-warm-grey dark:text-dark-muted max-w-xl font-normal leading-relaxed mb-8"
            >
              Full Stack Developer specializing in building scalable web applications, modern interfaces, and reliable backend systems.
            </motion.p>

            {/* Technology Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 mb-10"
            >
              {personalInfo.heroTechStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-xs font-mono text-charcoal dark:text-dark-text shadow-sm hover:border-electric-violet transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="btn-editorial-primary group"
              >
                <span>Explore My Work</span>
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Gowtham_K_Resume.pdf"
                className="btn-editorial-secondary"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text hover:text-electric-violet hover:border-electric-violet transition-colors shadow-sm"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text hover:text-electric-violet hover:border-electric-violet transition-colors shadow-sm"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Media Composition (Col 8-12) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Main Editorial Card Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Media Container with Image */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border shadow-float aspect-[4/5] group">
                <img
                  src={assets.developerDesk}
                  alt="Minimal software engineer workstation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Floating Micro Code Snippet */}
                <div className="absolute top-5 left-5 right-5 p-3.5 rounded-2xl backdrop-blur-xl bg-charcoal/85 border border-white/10 text-white font-mono text-xs shadow-2xl">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-white/50">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={12} className="text-soft-lime" /> developer.ts
                    </span>
                    <span className="text-white/40">MERN • Cloud</span>
                  </div>
                  <pre className="text-[11px] leading-relaxed text-white/90">
                    <code>
                      <span className="text-soft-lavender">const</span> developer = &#123;{'\n'}
                      {'  '}name: <span className="text-soft-lime">"Gowtham K"</span>,{'\n'}
                      {'  '}role: <span className="text-soft-lime">"Full Stack Dev"</span>,{'\n'}
                      {'  '}status: <span className="text-soft-lime">"Building Impact"</span>{'\n'}
                      &#125;;
                    </code>
                  </pre>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-dark-card/90 border border-border-subtle/80 dark:border-dark-border text-charcoal dark:text-dark-text shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono uppercase text-warm-grey dark:text-dark-muted">
                      Sri Eshwar College of Eng.
                    </p>
                    <p className="font-display font-bold text-sm text-charcoal dark:text-white">
                      B.Tech Information Technology
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-electric-violet/10 text-electric-violet flex items-center justify-center font-bold text-xs font-mono">
                    8.22
                  </div>
                </div>
              </div>

              {/* Floating Decorative Badge 1 */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border p-3.5 rounded-2xl shadow-float hidden sm:flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-soft-lime/40 text-charcoal flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-warm-grey uppercase">Performance</p>
                  <p className="font-display font-bold text-xs text-charcoal dark:text-dark-text">Clean Code Architect</p>
                </div>
              </motion.div>

              {/* Floating Decorative Badge 2 */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 -right-5 bg-electric-violet text-white p-3 rounded-2xl shadow-float-violet hidden sm:flex items-center gap-2.5"
              >
                <Code2 size={16} />
                <span className="text-xs font-mono font-medium">MERN + Python</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Statistics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-border-subtle dark:border-dark-border grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold tracking-tight text-charcoal dark:text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-warm-grey dark:text-dark-muted font-mono mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
