import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, MapPin, ShieldCheck, Cpu, Car, Navigation, AlertTriangle } from 'lucide-react';
import { projects } from '../data/projects';
import { assets } from '../data/assets';
import { AnimatedSection } from './AnimatedSection';
import { GithubIcon as Github } from '../utils/socialIcons';

export default function Projects() {
  const navigate = useNavigate();

  const trackzone = projects.find((p) => p.id === 'trackzone');
  const rentaro = projects.find((p) => p.id === 'rentaro');
  const civictrack = projects.find((p) => p.id === 'civictrack');

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-ivory dark:bg-dark-bg relative border-t border-border-subtle dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="editorial-pill bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text">
              03 // Selected Works
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="editorial-title text-4xl sm:text-6xl font-bold tracking-tight text-charcoal dark:text-white uppercase">
                Featured <span className="editorial-serif italic font-normal text-electric-violet dark:text-soft-lavender">Projects</span>
              </h2>
              <p className="text-warm-grey dark:text-dark-muted text-base max-w-xl mt-3">
                Architected from problem definition to full-stack deployment. Real solutions integrating biometric security, automated workflows, and civic infrastructure.
              </p>
            </div>
            <span className="text-xs font-mono text-warm-grey dark:text-dark-muted hidden md:inline-block">
              03 Flagship Case Studies
            </span>
          </div>
        </AnimatedSection>

        {/* Asymmetric Project Showcase */}
        <div className="space-y-12">
          {/* ==============================================================
              PROJECT 01: TRACKZONE (FLAGSHIP MASSIVE FEATURE PRESENTATION)
             ============================================================== */}
          {trackzone && (
            <AnimatedSection delay={0.1}>
              <div className="editorial-card overflow-hidden group border border-border-subtle dark:border-dark-border">
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Interactive Technical Mockup (Col 1-7) */}
                  <div className="lg:col-span-7 bg-[#121217] text-white p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                    {/* Simulated Satellite Map / Geofence Backdrop */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <img
                        src={assets.trackzoneMap}
                        alt="Satellite map geofencing"
                        className="w-full h-full object-cover filter contrast-150"
                      />
                    </div>

                    {/* Top Simulated System Header */}
                    <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white/80">LIVE GEOFENCE ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                          {trackzone.status.toUpperCase()}
                        </span>
                        <span className="text-white/40 hidden sm:inline">10.9982° N, 76.9634° E</span>
                      </div>
                    </div>

                    {/* Center Visual Mockup: Geofence Pulse Circle */}
                    <div className="relative z-10 my-8 py-4 flex flex-col sm:flex-row items-center justify-around gap-6">
                      {/* Pulse Circle */}
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-electric-violet/40 animate-ping" />
                        <div className="absolute inset-3 rounded-full border border-soft-lavender/30" />
                        <div className="w-20 h-20 rounded-full bg-electric-violet/20 backdrop-blur-md border border-electric-violet flex flex-col items-center justify-center text-center p-2">
                          <MapPin size={20} className="text-soft-lime mb-0.5" />
                          <span className="text-[10px] font-mono text-white font-bold leading-none">SECE ZONE</span>
                        </div>
                      </div>

                      {/* Biometric Verification Card */}
                      <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 max-w-xs w-full space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-white/60">WebAuthn Status</span>
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <ShieldCheck size={12} /> VERIFIED
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-electric-violet to-soft-lime w-[96%]" />
                        </div>
                        <p className="text-[11px] text-white/70 font-mono">
                          Haversine Accuracy: <span className="text-soft-lime font-bold">&lt; 2.4 meters</span>
                        </p>
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs font-mono text-white/60">
                      <span>Role-Based Access Control (RBAC)</span>
                      <span>BCrypt Security Hash</span>
                    </div>
                  </div>

                  {/* Right Column: Project Details & Action (Col 8-12) */}
                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-dark-card">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-electric-violet dark:text-soft-lavender uppercase tracking-widest">
                            Project 01 // Flagship
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                            {trackzone.status}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-warm-grey dark:text-dark-muted">
                          Full-Stack Application
                        </span>
                      </div>

                      <h3 className="editorial-title text-3xl sm:text-4xl font-bold text-charcoal dark:text-white mb-2">
                        {trackzone.title}
                      </h3>
                      <p className="text-sm font-semibold text-warm-grey dark:text-dark-muted mb-4 font-mono">
                        {trackzone.subtitle}
                      </p>

                      <p className="text-sm sm:text-base text-warm-grey dark:text-dark-muted leading-relaxed mb-6 font-sans">
                        {trackzone.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {trackzone.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border text-xs font-mono text-charcoal dark:text-dark-text"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-border-subtle dark:border-dark-border flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => navigate(`/project/${trackzone.id}`)}
                        className="btn-editorial-primary text-xs"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <div className="flex flex-wrap items-center gap-2">
                        {trackzone.githubUrl && (
                          <a
                            href={trackzone.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border-subtle dark:border-dark-border bg-white dark:bg-dark-card text-charcoal dark:text-dark-text hover:text-electric-violet hover:border-electric-violet transition-all text-xs font-mono font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>GitHub</span>
                            <Github size={14} />
                          </a>
                        )}
                        {trackzone.liveUrl && (
                          <a
                            href={trackzone.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-electric-violet text-white hover:bg-charcoal transition-all text-xs font-mono font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* ==============================================================
              PROJECTS 02 & 03: ASYMMETRIC DUAL BENTO ROW
             ============================================================== */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* PROJECT 02: RENTARO (Col 1-6) */}
            {rentaro && (
              <AnimatedSection delay={0.2} className="lg:col-span-6 flex">
                <div className="editorial-card overflow-hidden flex flex-col justify-between w-full group">
                  {/* Image Preview Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                    <img
                      src={assets.rentaroCar}
                      alt="Rentaro modern car rental UI"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    
                    {/* Floating Simulated Booking Chip */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/90 dark:bg-charcoal/90 text-charcoal dark:text-white text-xs font-mono flex items-center gap-1.5 shadow-md">
                      <Car size={13} className="text-electric-violet" />
                      <span>Google OAuth 2.0 Enabled</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                      <span>Real-Time Fleet Availability</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                        {rentaro.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-electric-violet dark:text-soft-lavender uppercase tracking-widest">
                            Project 02
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                            {rentaro.status}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-warm-grey dark:text-dark-muted">
                          Vehicle Fleet Portal
                        </span>
                      </div>

                      <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-charcoal dark:text-white mb-1">
                        {rentaro.title}
                      </h3>
                      <p className="text-xs font-mono text-warm-grey dark:text-dark-muted mb-3">
                        {rentaro.subtitle}
                      </p>

                      <p className="text-sm text-warm-grey dark:text-dark-muted leading-relaxed mb-6">
                        {rentaro.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {rentaro.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border text-xs font-mono text-charcoal dark:text-dark-text"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-5 border-t border-border-subtle dark:border-dark-border flex flex-wrap items-center justify-between gap-2">
                      <button
                        onClick={() => navigate(`/project/${rentaro.id}`)}
                        className="btn-editorial-secondary text-xs"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <div className="flex flex-wrap items-center gap-2">
                        {rentaro.githubUrl && (
                          <a
                            href={rentaro.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border-subtle dark:border-dark-border bg-white dark:bg-dark-card text-charcoal dark:text-dark-text hover:text-electric-violet hover:border-electric-violet transition-all text-xs font-mono font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>GitHub</span>
                            <Github size={14} />
                          </a>
                        )}
                        {rentaro.liveUrl && (
                          <a
                            href={rentaro.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-electric-violet text-white hover:bg-charcoal transition-all text-xs font-mono font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* PROJECT 03: CIVICTRACK (Col 7-12) */}
            {civictrack && (
              <AnimatedSection delay={0.3} className="lg:col-span-6 flex">
                <div className="editorial-card overflow-hidden flex flex-col justify-between w-full group">
                  {/* Image Preview Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                    <img
                      src={assets.civicRoad}
                      alt="CivicTrack road maintenance infrastructure"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    
                    {/* Floating Simulated Status Chip */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/90 dark:bg-charcoal/90 text-charcoal dark:text-white text-xs font-mono flex items-center gap-1.5 shadow-md">
                      <AlertTriangle size={13} className="text-amber-500" />
                      <span>Issue Tracking & Analytics</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                      <span>Python Flask + Geo-Mapping</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold">
                        {civictrack.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-electric-violet dark:text-soft-lavender uppercase tracking-widest">
                            Project 03
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold">
                            {civictrack.status}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-warm-grey dark:text-dark-muted">
                          Civic-Tech Platform
                        </span>
                      </div>

                      <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-charcoal dark:text-white mb-1">
                        {civictrack.title}
                      </h3>
                      <p className="text-xs font-mono text-warm-grey dark:text-dark-muted mb-3">
                        {civictrack.subtitle}
                      </p>

                      <p className="text-sm text-warm-grey dark:text-dark-muted leading-relaxed mb-6">
                        {civictrack.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {civictrack.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border text-xs font-mono text-charcoal dark:text-dark-text"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Notice civictrack.liveUrl is null, so Live Demo button will not render! */}
                    <div className="pt-5 border-t border-border-subtle dark:border-dark-border flex flex-wrap items-center justify-between gap-2">
                      <button
                        onClick={() => navigate(`/project/${civictrack.id}`)}
                        className="btn-editorial-secondary text-xs"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <div className="flex flex-wrap items-center gap-2">
                        {civictrack.githubUrl && (
                          <a
                            href={civictrack.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border-subtle dark:border-dark-border bg-white dark:bg-dark-card text-charcoal dark:text-dark-text hover:text-electric-violet hover:border-electric-violet transition-all text-xs font-mono font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>GitHub</span>
                            <Github size={14} />
                          </a>
                        )}
                        {civictrack.liveUrl && (
                          <a
                            href={civictrack.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-electric-violet text-white hover:bg-charcoal transition-all text-xs font-mono font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
