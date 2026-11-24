import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { AnimatedSection } from './AnimatedSection';
import { GithubIcon, LinkedinIcon } from '../utils/socialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      errs.message = 'Project message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('loading');

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'key_placeholder'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-charcoal text-white relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric-violet/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Coordinates (Col 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <span className="editorial-pill bg-white/10 text-white border border-white/10">
                  06 // Let's Connect
                </span>
              </div>

              {/* Exact Prompt Required Headline */}
              <h2 className="editorial-title text-5xl sm:text-7xl font-bold tracking-tight text-white uppercase mb-6 leading-none">
                Have an idea?
                <br />
                <span className="editorial-serif italic font-normal text-soft-lime normal-case">
                  Let's Build It.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 max-w-md font-sans leading-relaxed mb-10">
                Whether you have an ambitious software project, an open engineering role, or a challenging problem to solve, my inbox is open.
              </p>

              {/* Coordinates List */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 group text-white/90 hover:text-soft-lime transition-colors font-mono text-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-soft-lime group-hover:border-soft-lime transition-colors">
                    <Mail size={16} />
                  </div>
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3.5 group text-white/90 hover:text-soft-lime transition-colors font-mono text-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-soft-lime group-hover:border-soft-lime transition-colors">
                    <Phone size={16} />
                  </div>
                  <span>{personalInfo.phone}</span>
                </a>

                <div className="flex items-center gap-3.5 text-white/70 font-mono text-sm">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                    <MapPin size={16} />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-8 mt-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-secondary bg-white/5 text-white border-white/10 hover:bg-white hover:text-charcoal text-xs"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-secondary bg-white/5 text-white border-white/10 hover:bg-white hover:text-charcoal text-xs"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: High-End Contact Form (Col 7-12) */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.2}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                  Initiate Conversation
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-soft-lime transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs font-mono mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ada@domain.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-soft-lime transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs font-mono mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / Technical Inquiry"
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-soft-lime transition-colors"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs font-mono mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project scope, timeline, or engineering opportunity..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-soft-lime transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs font-mono mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submission Status Alerts */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                      <CheckCircle2 size={16} />
                      <span>Thank you! Your message has been dispatched successfully.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono">
                      <AlertCircle size={16} />
                      <span>Direct email delivery fallback: Please write to {personalInfo.email}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-editorial-primary w-full bg-soft-lime text-charcoal hover:bg-white hover:text-charcoal py-4 text-sm font-semibold disabled:opacity-50 mt-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
