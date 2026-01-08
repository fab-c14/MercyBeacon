'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FaHeart className="text-pink-500 text-2xl" />
            <span className="text-white font-bold text-xl">
              {process.env.NEXT_PUBLIC_CHARITY_NAME || 'CharityWeb'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#donate"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#donate"
              className="block mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
