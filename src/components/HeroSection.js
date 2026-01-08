'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HeroSection = () => {
  // Using a simple animation data inline (you can replace this with actual Lottie JSON)
  const animationData = {
    v: "5.5.7",
    fr: 30,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: "Heart Animation",
    ddd: 0,
    assets: [],
    layers: []
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🌟 Making Impact Together
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                Empower Lives Through
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">
                Compassion
              </span>
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl mb-8 max-w-2xl">
              Join us in our mission to create positive change in communities worldwide. 
              Every contribution brings hope, dignity, and opportunity to those who need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#donate"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105"
              >
                <span className="relative z-10">Start Donating</span>
              </a>
              
              <a
                href="#volunteer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-neutral-700 rounded-full hover:border-purple-500 hover:bg-neutral-800/50 transition-all duration-300"
              >
                Volunteer With Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-neutral-500 text-sm">Lives Touched</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-neutral-500 text-sm">Volunteers</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-neutral-500 text-sm">Communities</div>
              </div>
            </div>
          </div>

          {/* Lottie Animation Placeholder */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Placeholder for Lottie animation */}
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl animate-pulse">💝</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
