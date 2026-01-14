'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { addContact } from '../services/firebaseService';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    needType: 'Education',
    location: '',
    details: '',
    supportLink: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const result = await addContact(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        needType: 'Education',
        location: '',
        details: '',
        supportLink: '',
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setErrorMessage('Error sending message. Please try again or contact us directly.');
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Request Support or Partner With Us
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Share your need so we can route it to the right MercyBeacon program—education, medical, or food/essential support. We also welcome partners and volunteers.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#e6f3f6] p-3 rounded-lg">
                  <FaEnvelope className="text-[#2c798e] text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600">info@mercybeacon.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e6f3f6] p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-[#2c798e] text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-600">Adjacent General Bus Stand, Parimpora, Srinagar, Jammu &amp; Kashmir 190017.</p>
                  <p className='tex-gray-600'>Or</p>
                  <p className="text-gray-600">⁠First Floor, B31, Block B, Sector 2, Noida - 201301</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e6f3f6] p-3 rounded-lg">
                  <FaPhone className="text-[#2c798e] text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">+91 9796000751</p>
                  <p className='text-gray-600'>Or</p>
                  <p className='text-gray-600'>+91 7428037611</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="support" className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 text-sm font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 text-sm font-semibold mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="needType" className="block text-gray-900 text-sm font-semibold mb-2">
                  Need Type *
                </label>
                <select
                  id="needType"
                  name="needType"
                  value={formData.needType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#2c798e] transition-colors"
                >
                  <option>Education</option>
                  <option>Medical</option>
                  <option>Food &amp; Essentials</option>
                  <option>Partnership / Volunteering</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-gray-900 text-sm font-semibold mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors"
                  placeholder="City / district"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-gray-900 text-sm font-semibold mb-2">
                  Support Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors resize-none"
                  placeholder="Describe the situation and the kind of support required..."
                />
              </div>

              <div>
                <label htmlFor="supportLink" className="block text-gray-900 text-sm font-semibold mb-2">
                  Supporting Documents (link or short note)
                </label>
                <input
                  type="text"
                  id="supportLink"
                  name="supportLink"
                  value={formData.supportLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c798e] transition-colors"
                  placeholder="Share a link to receipts, reports, or references"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 flex items-center gap-3 text-green-600">
                  <FaCheckCircle />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && errorMessage && (
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 text-red-600">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2c798e] hover:bg-[#255f71] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
