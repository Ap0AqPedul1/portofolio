'use client';

import type { Experience } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ExperienceSectionProps {
  data: Experience[];
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="pengalaman" className="min-h-screen py-20 pt-24 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isIntersecting ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pengalaman Kerja
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((experience, index) => (
            <div
              key={experience.id}
              className={`${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              } ${isIntersecting ? 'animate-in' : ''} h-full`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 card-hover h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r rounded-full flex items-center justify-center mr-4`}
                  >
                    <span className="text-white font-bold">{experience.id}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.position}
                    </h3>
                    <p className="text-white/70">
                      {experience.company} • {experience.period}
                    </p>
                  </div>
                </div>
                <p className="text-white/80 flex-grow">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
