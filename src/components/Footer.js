import React from 'react';
import Link from 'next/link';
import { FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaHeart className="text-pink-500 text-2xl" />
              <span className="text-white font-bold text-xl">
                {process.env.NEXT_PUBLIC_CHARITY_NAME || 'CharityWeb'}
              </span>
            </div>
            <p className="text-neutral-400 text-sm">
              Transforming lives through compassion, one donation at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#donate" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="#volunteer" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Volunteer
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Corporate Giving
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
            <p className="text-neutral-400 text-sm">
              Stay updated with our latest news and impact stories.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} {process.env.NEXT_PUBLIC_CHARITY_NAME || 'CharityWeb'}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
