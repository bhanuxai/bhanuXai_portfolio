import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

// Component imports

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GitHubSection from './sections/GitHubSection';
import CodingProfiles from './sections/CodingProfiles';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ProfileCard from './components/ProfileCard';
import profileAvatar from './assets/Gemini_Generated_Image_m50r4pm50r4pm50r.png';

// Load CSS styles
import './App.css';

export default function App() {
  // Reading progress tracking
  const { scrollYProgress } = useScroll();
  const [showProfile, setShowProfile] = useState(false);

  // Theme management: default to 'light'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme_preference_v2');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme_preference_v2', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme_preference_v2', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Lenis Smooth Scroll initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2.2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div 
        className="min-h-screen relative flex flex-col selection:bg-primary/30 selection:text-accent bg-transparent"
      >
        
        {/* Floating Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 md:right-8 z-[9999] p-3 glassmorphism text-textLight hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </button>

        {/* Sticky Navbar */}
        <Navbar onLogoClick={() => setShowProfile(true)} />

        {/* Main Layout Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <GitHubSection />
          <CodingProfiles />
          <Gallery />
          <Contact />
        </main>

        {/* Simple Premium Footer */}
        <Footer />
      </div>

      {/* Profile Card Modal Overlay */}
      {showProfile && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowProfile(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all z-[10001] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowProfile(false);
            }}
            aria-label="Close Profile"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="w-[280px] md:w-[320px] relative max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ProfileCard
              name="Bhanu Sesha Sai"
              title="AI & ML Engineer & Software Developer"
              handle="bhanuxai"
              status="Online & Available"
              contactText="Get in Touch"
              avatarUrl={profileAvatar}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(6, 182, 212, 0.4)"
              innerGradient="linear-gradient(145deg, #1e1b4b 0%, #0891b2 100%)"
              onContactClick={() => {
                setShowProfile(false);
                const el = document.querySelector('#contact');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
