'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues
const LottiePlayer = dynamic(() => import('lottie-react'), { ssr: false });

// Lottie animation
import impactAnimation from '../../public/lottie/donate.json';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-white overflow-hidden pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="bg-[var(--brand-accent-soft)] text-[var(--brand-navy)] px-4 py-2 rounded-full text-sm font-semibold">
                🌟 MercyBeacon International Foundation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Lighting lives through
              <span className="block text-[var(--brand-accent)] mt-2">
                healthcare, education, and dignity
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl">
              Built on a legacy of service since 1988, MercyBeacon protects education
              continuity, unlocks medical support, and restores dignity for vulnerable
              households.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg">
              <a
                href="#donate"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white
                           bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-dark)]
                           rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Donate
              </a>

              <a
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold
                           text-[var(--brand-accent)] border-2 border-[var(--brand-accent)]
                           rounded-full hover:bg-[var(--brand-accent-soft)]
                           transition-all duration-300"
              >
                Sponsor Education
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-[var(--brand-accent)]">5K+</div>
                <div className="text-gray-600 text-sm">Students supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--brand-accent)]">8K+</div>
                <div className="text-gray-600 text-sm">Families reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--brand-accent)]">1.2K+</div>
                <div className="text-gray-600 text-sm">Medical cases supported</div>
              </div>
            </div>
          </div>

          {/* Animation */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-[var(--brand-accent-soft)] rounded-full blur-2xl"></div>
              <div className="relative z-10 w-full h-full">
                <LottiePlayer
                  animationData={impactAnimation}
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
