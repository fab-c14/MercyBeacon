'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';
import { addDonation } from '../services/firebaseService';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const amounts = [10, 25, 50, 100, 250, 500];

  const handleDonateClick = async () => {
    const amount = selectedAmount || parseFloat(customAmount);
    
    setErrorMessage('');
    
    if (!amount || amount <= 0) {
      setErrorMessage('Please select or enter a valid donation amount');
      return;
    }

    if (!donorName || !donorEmail) {
      setErrorMessage('Please enter your name and email');
      return;
    }

    if (!process.env.NEXT_PUBLIC_CHARITY_WALLET_ADDRESS && !process.env.NEXT_PUBLIC_CHARITY_UPI_ID) {
      setErrorMessage('Payment configuration is not set up. Please contact the administrator.');
      return;
    }

    setIsSubmitting(true);

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
      setErrorMessage('');
    } else {
      setErrorMessage('Error processing donation. Please try again.');
    }
  };

  const paymentInfo = process.env.NEXT_PUBLIC_CHARITY_WALLET_ADDRESS || 
                      process.env.NEXT_PUBLIC_CHARITY_UPI_ID || 
                      'Please configure payment information';

  return (
    <section id="donate" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Make a Difference Today
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your generosity transforms lives. Choose an amount or enter a custom donation to support our mission.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
            {!showQR ? (
              <>
                <div className="mb-8">
                  <label className="block text-gray-900 text-sm font-semibold mb-4">
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
                        className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                          selectedAmount === amount
                            ? 'bg-[#2c798e] text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#2c798e]'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-900 text-sm font-semibold mb-2">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
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
                        className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-900 text-sm font-semibold mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 text-sm font-semibold mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 mb-6 text-red-600">
                  {errorMessage}
                </div>
              )}

              <button
                onClick={handleDonateClick}
                disabled={isSubmitting}
                className="w-full bg-[#2c798e] hover:bg-[#255f71] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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
                <div className="text-center">
                  <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You for Your Generosity!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Scan the QR code below to complete your donation of ${selectedAmount || customAmount}
                  </p>

                  <div className="bg-white p-8 rounded-xl inline-block mb-6 border-2 border-gray-200">
                    <QRCodeSVG
                      value={paymentInfo}
                      size={256}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 mb-6">
                    <p className="text-gray-700 text-sm font-semibold">
                      Payment Address/UPI ID:
                    </p>
                    <p className="text-gray-900 font-mono text-sm break-all">
                      {paymentInfo}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm mb-6">
                    After completing the payment, you will receive a confirmation email at {donorEmail}
                  </p>

                  <button
                    onClick={() => {
                      setShowQR(false);
                      setSelectedAmount(null);
                      setCustomAmount('');
                      setDonorName('');
                      setDonorEmail('');
                      setErrorMessage('');
                    }}
                    className="text-[#2c798e] hover:text-[#255f71] font-semibold transition-colors"
                  >
                    ← Make Another Donation
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>🔒 Secure payment processing • 100% of your donation goes to charity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
