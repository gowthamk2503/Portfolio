import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronRight, Layers, Zap, Target, Workflow, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { assets } from '../data/assets';
import { AnimatedSection } from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GithubIcon as Github } from '../utils/socialIcons';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    navigate('/');
    return null;
  }

  // Matching image preview per project
  const projectImage =
    project.id === 'trackzone'
      ? assets.trackzoneMap
      : project.id === 'rentaro'
      ? assets.rentaroCar
      : assets.civicRoad;

  return (
    <>
      <Helmet>
        <title>{project.title} — Case Study | Gowtham K</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen bg-ivory dark:bg-dark-bg text-charcoal dark:text-dark-text selection:bg-soft-lime selection:text-charcoal">
        <Navbar />

        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Back Navigation Button */}
            <AnimatedSection className="mb-8">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-warm-grey dark:text-dark-muted hover:text-electric-violet dark:hover:text-soft-lavender transition-colors py-2 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>Return to Portfolio</span>
              </button>
            </AnimatedSection>

            {/* Case Study Header */}
            <AnimatedSection delay={0.1} className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="editorial-pill bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-charcoal dark:text-dark-text">
                  Case Study // Technical Report
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                  {project.status}
                </span>
              </div>

              <h1 className="editorial-title text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-charcoal dark:text-white uppercase mb-4">
                {project.title}
              </h1>
              <p className="editorial-serif italic text-2xl sm:text-3xl text-electric-violet dark:text-soft-lavender mb-6">
                {project.subtitle}
              </p>
              <p className="text-base sm:text-lg text-warm-grey dark:text-dark-muted leading-relaxed max-w-3xl">
                {project.longDescription}
              </p>

              {/* Technologies Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-border-subtle dark:border-dark-border">
                <span className="text-xs font-mono uppercase text-warm-grey mr-2">Tech Stack:</span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border text-xs font-mono text-charcoal dark:text-dark-text shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Cinematic Hero Image Display with Prominent Link Bar */}
            <AnimatedSection delay={0.2} className="mb-16">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-charcoal border border-border-subtle dark:border-dark-border shadow-float">
                <img
                  src={projectImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                
                {/* Floating Bottom Link Bar */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between text-white font-mono text-xs gap-4">
                  <span className="hidden sm:inline">Status: {project.status}</span>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-white text-charcoal text-xs font-semibold hover:bg-soft-lime transition-all inline-flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Github size={15} />
                        <span>View GitHub Repository</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-electric-violet text-white text-xs font-semibold hover:bg-charcoal transition-all inline-flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <ExternalLink size={15} />
                        <span>Visit Live Application</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Deep-Dive Case Study Columns */}
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Main Content (Col 1-8) */}
              <div className="lg:col-span-8 space-y-12">
                {/* Problem Statement & Proposed Solution Bento */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="editorial-card p-6 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border">
                    <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                      <Target size={18} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-charcoal dark:text-white mb-2">
                      Problem Statement
                    </h3>
                    <p className="text-sm text-warm-grey dark:text-dark-muted leading-relaxed font-sans">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div className="editorial-card p-6 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                      <Zap size={18} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-charcoal dark:text-white mb-2">
                      Proposed Solution
                    </h3>
                    <p className="text-sm text-warm-grey dark:text-dark-muted leading-relaxed font-sans">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* System Architecture */}
                <div className="editorial-card p-8 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-electric-violet/10 text-electric-violet flex items-center justify-center">
                      <Layers size={18} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-charcoal dark:text-white">
                      System Architecture
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-warm-grey dark:text-dark-muted leading-relaxed font-sans">
                    {project.architecture}
                  </p>
                </div>

                {/* Project Workflow Steps */}
                <div className="editorial-card p-8 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-soft-lime/30 text-charcoal flex items-center justify-center">
                      <Workflow size={18} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-charcoal dark:text-white">
                      Execution Workflow
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {project.workflow.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-7 h-7 rounded-full bg-ivory dark:bg-dark-bg border border-border-subtle dark:border-dark-border flex items-center justify-center text-xs font-mono font-bold text-charcoal dark:text-white flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-warm-grey dark:text-dark-muted leading-relaxed font-sans pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar (Col 9-12) */}
              <div className="lg:col-span-4 space-y-6">
                {/* External Action Links Sidebar Card */}
                <div className="editorial-card p-6 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border">
                  <h4 className="font-display font-bold text-base text-charcoal dark:text-white mb-4">
                    Project Links
                  </h4>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-primary w-full text-xs justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink size={14} />
                          Visit Live Application
                        </span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-secondary w-full text-xs justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <Github size={14} />
                          View GitHub Repository
                        </span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Key Features List */}
                <div className="editorial-card p-6 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border">
                  <h4 className="font-display font-bold text-base text-charcoal dark:text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-grey dark:text-dark-muted">
                        <CheckCircle2 size={15} className="text-electric-violet flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Action Box */}
                <div className="p-6 rounded-3xl bg-charcoal text-white dark:bg-dark-card border border-white/10 dark:border-dark-border text-center">
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Interested in this system?
                  </h4>
                  <p className="text-xs text-white/70 font-sans mb-6">
                    Feel free to explore the repository or contact me for an architectural walkthrough.
                  </p>
                  <button
                    onClick={() => {
                      navigate('/');
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="btn-editorial-primary bg-white text-charcoal hover:bg-soft-lime hover:text-charcoal w-full text-xs"
                  >
                    Discuss This Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
