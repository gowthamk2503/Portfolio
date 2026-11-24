import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from '../utils/socialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 px-4 sm:px-6 lg:px-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo & Headline */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white text-charcoal flex items-center justify-center font-display font-bold text-sm">
                GK
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">GOWTHAM K</h3>
                <p className="text-xs font-mono text-white/50">Full Stack Developer • Software Engineer</p>
              </div>
            </div>
            <p className="text-xs text-white/60 font-mono leading-relaxed mt-2">
              BUILD THOUGHTFULLY. DESIGN BEAUTIFULLY. ENGINEER IMPACT.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-soft-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-soft-lime hover:border-soft-lime hover:scale-105 transition-all self-end md:self-auto"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} Gowtham K. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
