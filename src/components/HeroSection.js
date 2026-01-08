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
              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                🌟 Making Impact Together
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Empower Lives Through
              <span className="block text-orange-500 mt-2">
                Compassion
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
              Join us in our mission to create positive change in communities worldwide. 
              Every contribution brings hope, dignity, and opportunity to those who need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#donate"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Donating
              </a>
              
              <a
                href="#volunteer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-all duration-300"
              >
                Volunteer With Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-orange-500">
                  10K+
                </div>
                <div className="text-gray-600 text-sm">Lives Touched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">
                  500+
                </div>
                <div className="text-gray-600 text-sm">Volunteers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">
                  50+
                </div>
                <div className="text-gray-600 text-sm">Communities</div>
              </div>
            </div>
          </div>

          {/* Image/Animation Placeholder */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-orange-100 rounded-full"></div>
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
