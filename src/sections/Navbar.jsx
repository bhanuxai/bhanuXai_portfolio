import React, { useState, useEffect, useMemo } from 'react';
import PillNav from '../components/PillNav';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%237c3aed"/><stop offset="100%" stop-color="%2306b6d4"/></linearGradient></defs><circle cx="50" cy="50" r="46" fill="url(%23g)"/><text x="50%" y="54%" fill="white" font-family="sans-serif" font-weight="900" font-size="34" text-anchor="middle" dominant-baseline="middle">B</text></svg>`;

export default function Navbar({ onLogoClick }) {
  const [activeSection, setActiveSection] = useState('home');

  // Update active item based on intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -100; // offset spacing for floating island navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = useMemo(() => NAV_ITEMS.map((item) => ({
    label: item.name,
    href: item.href,
    onClick: (e) => scrollToSection(e, item.href)
  })), []);

  return (
    <PillNav
      logo={LOGO_SVG}
      logoAlt="BhanuXai Logo"
      items={navItems}
      activeHref={`#${activeSection}`}
      pillColor="rgba(255, 255, 255, 0.03)"
      baseColor="rgba(5, 8, 22, 0.55)"
      pillTextColor="#94a3b8"
      hoveredPillTextColor="#ffffff"
      onLogoClick={onLogoClick}
      initialLoadAnimation={true}
    />
  );
}
