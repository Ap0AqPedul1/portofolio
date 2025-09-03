'use client';

import type { Achievement } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AchievementsSectionProps {
  data: Achievement[];
}

export default function AchievementsSection({ data }: AchievementsSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  const getAnimationClass = (index: number) => {
    if (index === 0) return 'slide-in-left';
    if (index === 1) return 'fade-in-up';
    return 'slide-in-right';
  };

  return (
    <section id="prestasi" className="min-h-screen py-20 pt-24 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isIntersecting ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prestasi
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`${getAnimationClass(index)} ${
                isIntersecting ? 'animate-in' : ''
              } h-full`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center card-hover h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-white/70">{achievement.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
