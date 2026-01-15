import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Brand (LOGO ONLY – FULL SIZE) */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-14 sm:h-16 md:h-18 w-auto">
                <Image
                  src="/Logo.png"
                  alt="MercyBeacon International Foundation logo"
                  height={72}
                  width={240}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-gray-400 text-sm max-w-xs">
              Lighting lives through healthcare, education, and dignity—built on
              a legacy of service since 1988.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#hero" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#programs" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/#support" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
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
                <Link href="/#donate" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="/#get-involved" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
                  Volunteer / Partner
                </Link>
              </li>
              <li>
                <Link href="/#news" className="text-gray-400 hover:text-[#2c798e] transition-colors text-sm">
                  News &amp; Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#2c798e] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#2c798e] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#2c798e] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#2c798e] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest news and impact stories.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} MercyBeacon International Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#2c798e] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#2c798e] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-[#2c798e] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
