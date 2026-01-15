'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Impact', href: '/#impact' },
    { name: 'Transparency', href: '/#transparency' },
    { name: 'News & Stories', href: '/#news' },
    { name: 'Contact', href: '/#support' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 sm:h-14 md:h-16 w-auto">
              <Image
                src="/Logo.png"
                alt="MercyBeacon International Foundation logo"
                height={64}
                width={220}
                priority
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm text-gray-700 font-medium transition-colors duration-300 hover:text-[#2c798e]
                           after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#2c798e]
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            {/* Donate Button */}
            <Link
              href="#donate"
              className="bg-[#2c798e] text-white
                         px-4 py-1.5 text-sm rounded-md font-medium
                         transition-all duration-300 shadow-sm
                         hover:bg-[#255f71] hover:shadow-md hover:scale-105
                         active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2c798e]/50"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-gray-900 p-2 rounded-md transition-colors
                       hover:bg-gray-100 active:scale-95"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="pt-4 pb-4 border-t border-gray-200 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-2 py-3 text-sm text-gray-700 font-medium rounded-md
                           transition-all duration-200
                           hover:text-[#2c798e] hover:bg-[#2c798e]/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#donate"
              className="block mt-3 bg-[#2c798e] text-white
                         px-5 py-2 text-sm rounded-full font-medium text-center
                         transition-all duration-300
                         hover:bg-[#255f71] hover:shadow-md
                         active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
