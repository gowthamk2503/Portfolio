import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useScrollHooks';
import { personalInfo } from '../data/personalInfo';
import { Mail, Phone, MapPin, Code2, Layers, Zap, Monitor, Package, Gauge } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../utils/socialIcons';

const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

const HIGHLIGHTS = [
  { icon: Layers, text: 'Full Stack Development' },
  { icon: Code2, text: 'MERN Stack & Python' },
  { icon: Zap, text: 'Clean & Scalable Code' },
  { icon: Monitor, text: 'Responsive Design' },
  { icon: Package, text: 'End-to-End Projects' },
  { icon: Gauge, text: 'Performance Optimization' },
];

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];

export default function Sidebar() {
  const activeSection = useActiveSection(SECTION_IDS);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hidden xl:flex flex-col fixed left-0 top-0 h-full w-72 bg-card-bg dark:bg-dark-card border-r border-border dark:border-dark-border z-30 overflow-y-auto scrollbar-hide"
    >
      <div className="flex flex-col h-full p-6">
        {/* Logo & Brand */}
        <div className="mb-8 pt-4">
          <motion.div
            className="flex items-center gap-3 mb-4"
            whileHover={{ x: 2 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-purple flex items-center justify-center shadow-purple flex-shrink-0">
              <span className="text-white font-bold text-lg tracking-tight">GK</span>
            </div>
            <div>
              <h2 className="font-bold text-main-text dark:text-dark-text text-base leading-tight">GOWTHAM K</h2>
              <p className="text-xs text-secondary-text dark:text-dark-secondary-text">Full Stack Developer</p>
            </div>
          </motion.div>

          <div className="p-3 bg-light-lavender dark:bg-dark-bg rounded-xl">
            <p className="text-xs font-semibold text-primary-purple dark:text-secondary-purple leading-relaxed">
              Full Stack Developer & Problem Solver
            </p>
          </div>
        </div>

        {/* Short Bio */}
        <p className="text-xs text-secondary-text dark:text-dark-secondary-text leading-relaxed mb-6">
          B.Tech IT student passionate about building scalable web applications and data-driven solutions.
        </p>

        {/* Navigation */}
        <nav className="mb-8">
          <p className="text-xs font-semibold text-secondary-text dark:text-dark-secondary-text uppercase tracking-widest mb-3">
            Navigation
          </p>
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? 'bg-light-lavender dark:bg-dark-bg text-primary-purple dark:text-secondary-purple'
                        : 'text-secondary-text dark:text-dark-secondary-text hover:bg-light-lavender dark:hover:bg-dark-bg hover:text-main-text dark:hover:text-dark-text'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ x: 0 }}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-active"
                          className="w-1.5 h-1.5 rounded-full bg-primary-purple dark:bg-secondary-purple flex-shrink-0"
                        />
                      )}
                    </AnimatePresence>
                    {!isActive && <div className="w-1.5 h-1.5 flex-shrink-0" />}
                    {link.label}
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Skill Highlights */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-secondary-text dark:text-dark-secondary-text uppercase tracking-widest mb-3">
            Expertise
          </p>
          <div className="space-y-2">
            {HIGHLIGHTS.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2.5 py-1.5"
              >
                <div className="w-6 h-6 rounded-lg bg-light-lavender dark:bg-dark-bg flex items-center justify-center flex-shrink-0">
                  <Icon size={12} className="text-primary-purple dark:text-secondary-purple" />
                </div>
                <span className="text-xs text-secondary-text dark:text-dark-secondary-text font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="mb-8 flex justify-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="w-28 h-48 bg-main-text dark:bg-dark-bg rounded-[20px] p-1.5 shadow-xl">
              <div className="w-full h-full bg-light-lavender dark:bg-dark-card rounded-[14px] overflow-hidden flex flex-col">
                {/* Phone screen header */}
                <div className="bg-primary-purple p-2">
                  <div className="flex items-center justify-between">
                    <div className="w-1 h-1 rounded-full bg-white/50" />
                    <div className="w-6 h-1 rounded-full bg-white/50" />
                    <div className="w-1 h-1 rounded-full bg-white/50" />
                  </div>
                </div>
                {/* Phone screen content */}
                <div className="p-2 flex-1 flex flex-col gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-primary-purple mx-auto flex items-center justify-center">
                    <span className="text-white text-[7px] font-bold">GK</span>
                  </div>
                  <div className="space-y-1">
                    {[70, 85, 60, 90].map((w, i) => (
                      <div key={i} className="h-1 rounded-full bg-primary-purple/20" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                  <div className="mt-1 space-y-1">
                    {[55, 80, 65].map((w, i) => (
                      <div key={i} className="h-1 rounded-full bg-primary-purple/15" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-main-text/20 dark:bg-dark-text/10 rounded-full blur-sm" />
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 justify-center">
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-border dark:border-dark-border flex items-center justify-center text-secondary-text dark:text-dark-secondary-text hover:bg-light-lavender dark:hover:bg-dark-bg hover:text-primary-purple dark:hover:text-secondary-purple transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
          <p className="text-center text-[10px] text-secondary-text dark:text-dark-secondary-text mt-3 font-mono">
            {personalInfo.footerTagline}
          </p>
        </div>
      </div>
    </motion.aside>
  );
}
