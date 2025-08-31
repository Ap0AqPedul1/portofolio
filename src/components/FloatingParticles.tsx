'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 50;
    const particles: Particle[] = [];

    // Generate particle data
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * 100,
        y: 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 10,
      });
    }

    // Create particle elements
    particles.forEach((particle) => {
      const element = document.createElement('div');
      element.className = 'absolute bg-white/10 rounded-full animate-particle-float';
      element.style.left = `${particle.x}%`;
      element.style.width = `${particle.size}px`;
      element.style.height = `${particle.size}px`;
      element.style.animationDelay = `${particle.delay}s`;
      element.style.animationDuration = `${particle.duration}s`;
      container.appendChild(element);
    });

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
