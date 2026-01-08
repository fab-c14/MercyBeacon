'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';
import { addDonation } from '@/services/firebaseService';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const amounts = [10, 25, 50, 100, 250, 500];

  const handleDonateClick = async () => {
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount <= 0) {
      alert('Please select or enter a donation amount');
      return;
    }

    if (!donorName || !donorEmail) {
      alert('Please enter your name and email');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Save donation intent to Firebase
    const result = await addDonation({
      amount,
      donorName,
      donorEmail,
      currency: 'USD',
      paymentMethod: 'QR Code',
    });

    setIsSubmitting(false);

    if (result.success) {
      setShowQR(true);
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
      alert('Error processing donation. Please try again.');
    }
  };

  const paymentInfo = process.env.NEXT_PUBLIC_CHARITY_WALLET_ADDRESS || 
                      process.env.NEXT_PUBLIC_CHARITY_UPI_ID || 
                      'donation@charityweb.org';

  return (
    <section id="donate" className="relative py-20 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">
              Make a Difference Today
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Your generosity transforms lives. Choose an amount or enter a custom donation to support our mission.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 shadow-2xl">
            {!showQR ? (
              <>
                {/* Donation Form */}
                <div className="mb-8">
                  <label className="block text-white text-sm font-semibold mb-4">
                    Select Amount (USD)
                  </label>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                          selectedAmount === amount
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/50'
                            : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 text-lg">
                        $
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleDonateClick}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Processing...'
                    ) : (
                      <>
                        <FaHeart /> Proceed to Donate
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* QR Code Display */}
                <div className="text-center">
                  <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You for Your Generosity!
                  </h3>
                  <p className="text-neutral-400 mb-8">
                    Scan the QR code below to complete your donation of ${selectedAmount || customAmount}
                  </p>

                  <div className="bg-white p-8 rounded-xl inline-block mb-6">
                    <QRCodeSVG
                      value={paymentInfo}
                      size={256}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  <div className="bg-neutral-700/50 rounded-lg p-4 mb-6">
                    <p className="text-neutral-300 text-sm">
                      Payment Address/UPI ID:
                    </p>
                    <p className="text-white font-mono text-sm break-all">
                      {paymentInfo}
                    </p>
                  </div>

                  <p className="text-neutral-400 text-sm mb-6">
                    After completing the payment, you will receive a confirmation email at {donorEmail}
                  </p>

                  <button
                    onClick={() => {
                      setShowQR(false);
                      setSelectedAmount(null);
                      setCustomAmount('');
                      setDonorName('');
                      setDonorEmail('');
                    }}
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    ← Make Another Donation
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center text-neutral-500 text-sm">
            <p>🔒 Secure payment processing • 100% of your donation goes to charity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
