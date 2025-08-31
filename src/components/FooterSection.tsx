'use client';

import type { Footer } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface FooterProps {
  data: Footer;
}

const iconMap = {
  twitter: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <title>Twitter</title>
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>
  ),
  linkedin: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  github: () => (
    <svg className="w-6 h-6" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <title>GitHub</title>
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
    </svg>
  ),
  instagram: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <title>Instagram</title>
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 1 0 12 7.5zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 1 1 0-5zM17.5 6a.9.9 0 1 1 0 1.8A.9.9 0 1 1 17.5 6z"/>
    </svg>
  ),
  facebook: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <title>Facebook</title>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.2-3.4.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z"/>
    </svg>
  ),
  email: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <title>Email</title>
      <path d="M12 13.5l8-5.5v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8l8 5.5zm0-1.5L4 6h16l-8 6zm0-9c-4.42 0-8 3.58-8 8v1l8-5.5L20 11V11c0-4.42-3.58-8-8-8z"/>
    </svg>
  ),
};

export default function FooterSection({ data }: FooterProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <footer className="py-12 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-6 text-center">
        <div
          ref={ref}
          className={`fade-in-up ${isIntersecting ? 'animate-in' : ''}`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{data.title}</h3>
          <p className="text-white/70 mb-6">{data.subtitle}</p>
          <div className="flex justify-center space-x-6">
            {data.socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all card-hover"
                  aria-label={`Visit ${link.name}`}
                >
                  {IconComponent ? (
                    <IconComponent />
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <title>Link</title>
                      <path d="M10.59 13.41L9.17 12l4.24-4.24 1.41 1.41L10.59 13.41zM7 17h10v2H7z" />
                    </svg>
                  )}
                </a>
              );
            })}
          </div>
          <p className="text-white/50 mt-8">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
