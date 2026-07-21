import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, ExternalLink } from 'lucide-react';
import { SiCoursera, SiTensorflow, SiGooglecloud, SiNvidia } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

const CERTIFICATES = [
  {
    id: 1,
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    date: 'Dec 2024',
    credentialId: 'DL-AI-88390',
    link: 'https://coursera.org',
    color: 'from-violet-500/10 to-indigo-500/5 border-violet-500/20 text-violet-400',
    logo: SiCoursera
  },
  {
    id: 2,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google TensorFlow team',
    date: 'Oct 2024',
    credentialId: 'TF-DEV-77291',
    link: 'https://coursera.org',
    color: 'from-orange-500/10 to-amber-500/5 border-orange-500/20 text-orange-400',
    logo: SiTensorflow
  },
  {
    id: 3,
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: 'Feb 2025',
    credentialId: 'AWS-ML-SPC-390',
    link: 'https://aws.amazon.com',
    color: 'from-blue-500/10 to-cyan-500/5 border-blue-500/20 text-blue-400',
    logo: FaAws
  },
  {
    id: 4,
    title: 'Professional Data Engineer',
    issuer: 'Google Cloud Platform (GCP)',
    date: 'Jan 2025',
    credentialId: 'GCP-PDE-99201',
    link: 'https://cloud.google.com',
    color: 'from-cyan-500/10 to-emerald-500/5 border-cyan-500/20 text-cyan-400',
    logo: SiGooglecloud
  },
  {
    id: 5,
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    date: 'Nov 2024',
    credentialId: 'NV-DLI-10029',
    link: 'https://nvidia.com/dli',
    color: 'from-emerald-500/10 to-green-500/5 border-emerald-500/20 text-emerald-400',
    logo: SiNvidia
  }
];

export default function Certifications() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block"
          >
            Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-textLight tracking-tight"
          >
            Certifications &amp; Badges
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-textMuted text-sm md:text-base mt-4 font-medium"
          >
            Professional recognitions verifying my competency in artificial intelligence, model training, and systems engineering.
          </motion.p>
        </div>

        {/* ScrollStack Cards Area */}
        <div className="relative max-w-lg mx-auto h-[480px] w-full border-[3px] border-black dark:border-white rounded bg-white dark:bg-zinc-900 p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary-color)]">
          <ScrollStack
            useWindowScroll={false}
            itemDistance={120}
            itemScale={0.035}
            itemStackDistance={16}
            stackPosition="15%"
            scaleEndPosition="5%"
            baseScale={0.92}
            rotationAmount={1.5}
            blurAmount={1}
            className="h-full w-full"
          >
            {CERTIFICATES.map((cert) => (
              <ScrollStackItem key={cert.id} itemClassName="w-full">
                <div className="w-full p-8 rounded border-[3px] border-black dark:border-white bg-white dark:bg-zinc-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary-color)] flex flex-col justify-between min-h-[220px] group transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_var(--primary-color)]">
                  <div>
                    {/* Top Badges */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded bg-accent text-black border-2 border-black dark:border-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <cert.logo className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-black font-semibold bg-green-400 border-2 border-black px-2 py-0.5 rounded">
                        <ShieldCheck className="w-3 h-3" /> Verified
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="font-display font-bold text-lg md:text-xl text-textLight mb-2 leading-snug">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-textMuted mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Metadata Footer */}
                  <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
                    <div className="flex items-center gap-1.5 text-textMuted text-[11px] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </div>
                    
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-cyan-400 transition-colors"
                    >
                      Verify ID: <span className="font-mono text-[9px] bg-white/50 dark:bg-white/5 px-2 py-0.5 rounded border border-glassBorder">{cert.credentialId}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

      </div>
    </section>
  );
}
