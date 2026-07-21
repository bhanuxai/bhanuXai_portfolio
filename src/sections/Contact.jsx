import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SOCIALS = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/bhanuxai', color: 'hover:bg-zinc-700 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhanu-sesha-sai-', color: 'hover:bg-blue-600 hover:text-white' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com', color: 'hover:bg-pink-500 hover:text-white' },
  { name: 'Email', icon: Mail, url: 'mailto:contact@bhanu.ai', color: 'hover:bg-yellow-400 hover:text-black dark:hover:bg-yellow-300 dark:hover:text-black' }
];

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    // If API keys aren't configured yet, perform a clean local mock trigger to show UI transitions
    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset status after a brief delay
        setTimeout(() => setStatus('idle'), 4000);
      }, 1500);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.text || 'A delivery failure occurred. Please try again.');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block"
          >
            Connection Hub
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
          >
            Get In Touch
          </motion.h2>
        </div>

        {/* Form & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left panel: Info & Socials (Spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-textLight">
                Let's discuss a project or opportunity
              </h3>
              <p className="text-textMuted text-sm md:text-base leading-relaxed font-medium">
                I am open to discussions about machine learning research, agentic workflows, software development, 
                and recruitment openings. Send a query and let's discuss details!
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 font-medium text-sm text-textMuted">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded bg-primary text-black border-2 border-black dark:border-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-textMuted block">Email Me</span>
                  <a href="mailto:contact@bhanu.ai" className="text-textLight hover:text-primary transition-colors cursor-none font-bold underline">
                    contact@bhanu.ai
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded bg-accent text-black border-2 border-black dark:border-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-textMuted block">Location</span>
                  <span className="text-textLight font-bold">India</span>
                </div>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold text-textMuted block tracking-widest">Connect elsewhere</span>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-11 h-11 rounded border-[3px] border-black dark:border-white bg-white dark:bg-zinc-800 flex items-center justify-center text-textLight transition-all duration-200 cursor-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] ${soc.color}`}
                      title={soc.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right panel: Contact Form (Spans 3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 glassmorphism rounded-2xl p-8 border border-glassBorder shadow-glass"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="custom-input cursor-none font-medium text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="custom-input cursor-none font-medium text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaboration details"
                  className="custom-input cursor-none font-medium text-sm"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="custom-input cursor-none font-medium text-sm resize-none"
                />
              </div>

              {/* Animated Button & Status messages */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                
                {/* Status Indicator */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-xs font-semibold text-emerald-400"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-xs font-semibold text-rose-400"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto ml-auto px-8 py-4 font-bold text-sm bg-primary text-black flex items-center justify-center gap-2 glow-button disabled:opacity-50 disabled:pointer-events-none cursor-none"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
