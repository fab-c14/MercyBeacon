'use client';

import Link from 'next/link';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[var(--brand-accent-soft)] text-[#1f3249]">
          <FaHeart className="text-[#2c798e]" />
          MercyBeacon International Foundation
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f3249]">
          Impact dashboard is offline
        </h1>
        <p className="text-gray-700 text-lg">
          We’ve removed the experimental dashboard to keep MercyBeacon focused on the public-facing experience.
          For updates or verification, please reach out directly and we’ll share the latest impact snapshots.
        </p>

        <div className="bg-[#e6f3f6] border-2 border-[#c7e2e8] rounded-2xl p-8 text-left space-y-4">
          <h2 className="text-2xl font-semibold text-[#1f3249]">How to get information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Email <a className="text-[#2c798e] font-semibold" href="mailto:info@mercybeacon.org">info@mercybeacon.org</a> for the latest reports.</li>
            <li>Visit the transparency section on the homepage for governance and policy details.</li>
            <li>Use the contact form to request verified impact data.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/#impact"
            className="bg-[#2c798e] hover:bg-[#255f71] text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            View public impact snapshot
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2c798e] font-semibold hover:text-[#255f71]"
          >
            <FaArrowLeft />
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
