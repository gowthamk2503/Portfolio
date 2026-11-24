import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Gowtham K</title>
      </Helmet>

      <div className="min-h-screen bg-ivory dark:bg-dark-bg flex items-center justify-center px-4 relative overflow-hidden text-charcoal dark:text-dark-text">
        <div className="max-w-md w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="editorial-card p-10 bg-white dark:bg-dark-card border border-border-subtle dark:border-dark-border shadow-float"
          >
            <span className="font-display font-bold text-7xl sm:text-8xl tracking-tighter text-charcoal dark:text-white block mb-4">
              404
            </span>

            <span className="editorial-serif italic text-2xl text-electric-violet dark:text-soft-lavender block mb-3">
              Route Undefined
            </span>

            <p className="text-sm text-warm-grey dark:text-dark-muted font-sans leading-relaxed mb-8">
              The technical path you requested does not exist or has been relocated.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="btn-editorial-primary w-full sm:w-auto text-xs"
              >
                <Home size={14} />
                <span>Return to Base</span>
              </button>

              <button
                onClick={() => navigate(-1)}
                className="btn-editorial-secondary w-full sm:w-auto text-xs"
              >
                <ArrowLeft size={14} />
                <span>Previous Page</span>
              </button>
            </div>
          </motion.div>

          <p className="mt-8 text-xs font-mono text-warm-grey/60 dark:text-dark-muted">
            GOWTHAM K // SOFTWARE ENGINEER
          </p>
        </div>
      </div>
    </>
  );
}
