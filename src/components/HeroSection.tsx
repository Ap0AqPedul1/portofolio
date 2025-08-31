'use client';

import type { Hero } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { smoothScrollTo } from '@/utils/helpers';

interface HeroSectionProps {
  data: Hero;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div
              ref={ref}
              className={`slide-in-left ${isIntersecting ? 'animate-in' : ''}`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                {data.title}
              </h1>
            </div>
            <div className={`slide-in-left ${isIntersecting ? 'animate-in' : ''}`}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {data.subtitle}
              </p>
            </div>
            <div className={`fade-in-up ${isIntersecting ? 'animate-in' : ''}`}>
              <button
                type="button"
                onClick={() => smoothScrollTo(data.ctaLink)}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 animate-pulse-glow"
              >
                {data.ctaText}
              </button>
            </div>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center md:justify-end">
            <div className={`slide-in-right ${isIntersecting ? 'animate-in' : ''}`}>
              <div className="relative">
                {/* Profile Photo Container */}
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center overflow-hidden">
                    <svg className="w-48 h-48 md:w-56 md:h-56 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <title>Profile avatar</title>
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only show on hero section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float opacity-70 hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={() => smoothScrollTo('#pengalaman')}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Scroll to next section"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
