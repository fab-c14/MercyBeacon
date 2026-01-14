'use client';

import Link from 'next/link';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';

const DashboardPage = () => {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@mercybeacon.org';

  return (
    <div className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[var(--brand-accent-soft)] text-[var(--brand-navy)]">
          <FaHeart className="text-[var(--brand-accent)]" />
          MercyBeacon International Foundation
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--brand-navy)]">
          Impact dashboard is offline
        </h1>
        <p className="text-gray-700 text-lg">
          We’ve removed the experimental dashboard to keep MercyBeacon focused on the public-facing experience.
          For updates or verification, please reach out directly and we’ll share the latest impact snapshots.
        </p>

        <div className="bg-[var(--brand-accent-soft)] border-2 border-[var(--brand-border)] rounded-2xl p-8 text-left space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">How to get information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Email <a className="text-[var(--brand-accent)] font-semibold" href={`mailto:${contactEmail}`}>{contactEmail}</a> for the latest reports.</li>
            <li>Visit the transparency section on the homepage for governance and policy details.</li>
            <li>Use the contact form to request verified impact data.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/#impact"
            className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-dark)] text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            View public impact snapshot
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-semibold hover:text-[var(--brand-accent-dark)]"
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
