import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Download, ArrowUpRight, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useScrollHooks';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from '../utils/socialIcons';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS) || 'hero';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Center Capsule Navbar (Desktop) */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full nav-capsule transition-all duration-300 max-w-5xl w-full ${
            scrolled ? 'shadow-float py-2 bg-white/90 dark:bg-dark-card/90' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 pl-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-charcoal dark:bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white dark:text-charcoal font-display font-bold text-xs tracking-tighter">
                GK
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-xs tracking-wider uppercase text-charcoal dark:text-dark-text">
                Gowtham K
              </span>
              <span className="text-[10px] text-warm-grey dark:text-dark-muted font-mono leading-none">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Links with Animated Sliding Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-ivory/60 dark:bg-dark-bg/60 p-1 rounded-full border border-border-subtle/50 dark:border-dark-border/50">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-charcoal dark:text-white font-semibold'
                      : 'text-warm-grey dark:text-dark-muted hover:text-charcoal dark:hover:text-dark-text'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white dark:bg-dark-card rounded-full shadow-sm border border-border-subtle/70 dark:border-dark-border"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-full flex items-center justify-center text-charcoal dark:text-dark-text hover:bg-ivory dark:hover:bg-dark-bg transition-colors"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0.5, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={15} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0.5, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={15} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Resume CTA Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Gowtham_K_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal text-white dark:bg-white dark:text-charcoal text-xs font-medium hover:bg-electric-violet dark:hover:bg-soft-lime dark:hover:text-charcoal transition-all duration-300"
            >
              <Download size={12} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-charcoal dark:text-dark-text hover:bg-ivory dark:hover:bg-dark-bg transition-colors"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 40px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ivory/98 dark:bg-dark-bg/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-28"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-mono tracking-widest text-warm-grey dark:text-dark-muted uppercase mb-2">
                Navigation
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => scrollTo(item.href)}
                  className="group flex items-center justify-between text-left py-2 border-b border-border-subtle/60 dark:border-dark-border"
                >
                  <span className="font-display font-bold text-3xl sm:text-4xl text-charcoal dark:text-white group-hover:text-electric-violet transition-colors">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-warm-grey group-hover:text-electric-violet group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </motion.button>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-border-subtle dark:border-dark-border flex flex-col gap-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-editorial-primary w-full text-center"
              >
                <Download size={16} />
                Download Complete Resume
              </a>

              <div className="flex items-center justify-between text-xs text-warm-grey dark:text-dark-muted font-mono pt-2">
                <span>Gowtham K • 2026</span>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-electric-violet transition-colors flex items-center gap-1"
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-electric-violet transition-colors flex items-center gap-1"
                  >
                    <LinkedinIcon size={14} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
