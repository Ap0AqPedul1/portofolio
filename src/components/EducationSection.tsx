'use client';

import type { Education } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface EducationSectionProps {
  data: Education;
}

export default function EducationSection({ data }: EducationSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="pendidikan" className="min-h-screen py-20 pt-24 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isIntersecting ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pendidikan
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`scale-in ${isIntersecting ? 'animate-in' : ''}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <title>Education icon</title>
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {data.degree}
                  </h3>
                  <p className="text-white/70 text-lg">
                    {data.institution} • {data.period}
                  </p>
                  <p className="text-yellow-400 font-semibold">
                    IPK: {data.gpa}
                  </p>
                </div>
              </div>
              <p className="text-white/80">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
