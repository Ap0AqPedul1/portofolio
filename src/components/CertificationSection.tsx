'use client';

import type { Certification } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface CertificationSectionProps {
  data: Certification[];
}

export default function CertificationSection({ data }: CertificationSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="pelatihan" className="min-h-screen py-20 pt-24 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isIntersecting ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pelatihan & Sertifikat
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((certification) => (
            <div
              key={certification.id}
              className={`scale-in ${isIntersecting ? 'animate-in' : ''}`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 card-hover">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {certification.name}
                </h3>
                <p className="text-white/70 text-sm">
                  {certification.provider} • {certification.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
