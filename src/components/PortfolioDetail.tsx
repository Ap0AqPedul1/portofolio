 'use client';

import type { PortfolioItem } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';

interface PortfolioDetailProps {
  project: PortfolioItem;
  onClose: () => void;
}

export default function PortfolioDetail({ project, onClose }: PortfolioDetailProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="container mx-auto px-6 py-8">
        <div 
          ref={ref}
          className={`bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden max-w-4xl mx-auto fade-in-up ${isIntersecting ? 'animate-in' : ''}`}
        >
          {/* Header */}
          <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <div className="absolute top-4 right-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
                aria-label="Tutup detail"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Close</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center text-white">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={project.photo ?? '/img/banner.jpg'}
                    alt={`${project.title} banner`}
                    fill
                    className="object-cover w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              <p className="text-xl opacity-90 mt-2">{project.category}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Deskripsi Proyek</h2>
              <p className="text-white/80 leading-relaxed mb-4">{project.detailDescription}</p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Teknologi yang Digunakan</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Spesifikasi & Fitur Utama</h3>
              <ul className="text-white/80 space-y-3">
                {project.specifications.map((spec) => (
                  <li key={spec} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contributions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Kontribusi Saya</h3>
              <ul className="text-white/80 space-y-3">
                {project.contributions.map((contribution) => (
                  <li key={contribution} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Hasil & Impact</h3>
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-white/80 leading-relaxed">{project.results}</p>
              </div>
            </div>

            {/* Close Button */}
            <div className="text-center pt-6">
              <button
                type="button"
                onClick={onClose}
                className={`bg-gradient-to-r ${project.gradient} text-white px-8 py-3 rounded-full hover:opacity-80 transition-all font-medium`}
              >
                Kembali ke Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
