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
    <section id="certificates" className="py-24 relative overflow-hidden bg-bgDark">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

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
            className="font-display font-black text-4xl md:text-5xl text-white tracking-tight"
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
        <div className="relative max-w-lg mx-auto h-[480px] w-full border border-white/5 rounded-3xl bg-white/1 backdrop-blur-md p-4">
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
                <div className={`w-full p-8 rounded-2xl border bg-gradient-to-br ${cert.color} shadow-glass-glow flex flex-col justify-between min-h-[220px] group hover:shadow-glow-primary transition-all duration-300`}>
                  <div>
                    {/* Top Badges */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-inner">
                        <cert.logo className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-semibold bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <ShieldCheck className="w-3 h-3" /> Verified
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="font-display font-bold text-lg md:text-xl text-white mb-2 leading-snug">
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
                      Verify ID: <span className="font-mono text-[9px] bg-white/5 px-2 py-0.5 rounded border border-white/5">{cert.credentialId}</span>
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
