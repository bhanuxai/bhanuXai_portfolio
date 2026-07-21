import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive') ||
        target.classList.contains('interactive-hover')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);
      
      // Keep pointer cursor visible on links, buttons and interactive elements
      const style = document.createElement('style');
      style.innerHTML = `
        a, button, input, textarea, select, [role="button"], .cursor-pointer, .cursor-pointer * {
          cursor: pointer !important;
        }
      `;
      style.id = 'cursor-none-styles';
      document.head.appendChild(style);
    } else {
      // Remove custom styling if it was added
      const styleEl = document.getElementById('cursor-none-styles');
      if (styleEl) styleEl.remove();
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      const styleEl = document.getElementById('cursor-none-styles');
      if (styleEl) styleEl.remove();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Brutalist Square */}
      <motion.div
        className="fixed top-0 left-0 rounded-none pointer-events-none z-[9999] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 48 : 24,
          height: hovered ? 48 : 24,
          backgroundColor: hovered ? 'var(--primary-color)' : 'transparent',
        }}
      />
      {/* Inner Dot Square */}
      <motion.div
        className="fixed top-0 left-0 rounded-none pointer-events-none z-[9999] bg-accent border border-black dark:border-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
        }}
      />
    </>
  );
}
