'use client';

import { useState } from 'react';
import type { Navigation } from '@/types';
import { useScrollEffect } from '@/hooks/useIntersectionObserver';
import { smoothScrollTo } from '@/utils/helpers';

interface NavigationProps {
  data: Navigation;
}

export default function NavigationComponent({ data }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollEffect();

  const handleNavClick = (href: string) => {
    // Close mobile overlay first so the target section is not hidden behind it
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      // slightly longer delay to allow overlay to unmount and layout to settle
      setTimeout(() => smoothScrollTo(href), 200);
      return;
    }

    smoothScrollTo(href);
  };

  const navBackgroundStyle = {
    background: scrollY > 100 ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)',
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 nav-blur border-b border-white/20 transition-all duration-300"
        style={navBackgroundStyle}
      >
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-white font-bold text-2xl">
                {data.logo}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {data.menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-yellow-300 transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-white hover:text-yellow-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Close menu</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Open menu</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
  <div className="fixed inset-0 bg-black/90 z-[9999] md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {data.menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-white text-2xl hover:text-yellow-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
