'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-white overflow-hidden pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="bg-[var(--brand-accent-soft)] text-[#1f3249] px-4 py-2 rounded-full text-sm font-semibold">
                🌟 MercyBeacon International Foundation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Lighting lives through
              <span className="block text-[#2c798e] mt-2">
                healthcare, education, and dignity
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
              Built on a legacy of service since 1988, MercyBeacon protects education continuity, unlocks medical support, and restores dignity for vulnerable households.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center lg:justify-start max-w-xl">
              <a
                href="#donate"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#2c798e] hover:bg-[#255f71] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Donate
              </a>
              
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#2c798e] border-2 border-[#2c798e] rounded-full hover:bg-[var(--brand-accent-soft)] transition-all duration-300"
              >
                Sponsor Education
              </a>
              
              <a
                href="#support"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1f3249] hover:bg-[#162538] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request Medical Support
              </a>

              <a
                href="#get-involved"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#2c798e] border-2 border-[#2c798e] rounded-full hover:bg-[var(--brand-accent-soft)] transition-all duration-300"
              >
                Partner With Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-[#2c798e]">
                  5K+
                </div>
                <div className="text-gray-600 text-sm">Students supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2c798e]">
                  8K+
                </div>
                <div className="text-gray-600 text-sm">Families reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2c798e]">
                  1.2K+
                </div>
                <div className="text-gray-600 text-sm">Medical cases supported</div>
              </div>
            </div>
          </div>

          {/* Image/Animation Placeholder */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-[var(--brand-accent-soft)] rounded-full"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-8xl">💝</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
