import React, { useRef, useState, useEffect } from 'react';
import Experience from '../idCard/components/Experience';

export default function Lanyard() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const student = {
    firstName: "Bhanu",
    lastName: "Sesha Sai",
    userId: "092019",
    batch: "AI & ML",
    batchId: "LPU",
    date: "06/30/2026",
    profilePicture: "/images/mypic.jpg"
  };

  return (
    <div ref={containerRef} className="lanyard-wrapper w-full h-full">
      <Experience {...student} isVisible={isVisible} />
    </div>
  );
}
