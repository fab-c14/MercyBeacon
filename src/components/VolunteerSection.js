'use client';

import React, { useState } from 'react';
import { FaHandsHelping, FaClock, FaMapMarkerAlt, FaCheckCircle, FaUserPlus } from 'react-icons/fa';
import { addVolunteer } from '../services/firebaseService';

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    availability: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.interest) {
      setErrorMessage('Please share your name, email, and the area you want to support.');
      return;
    }

    setIsSubmitting(true);
    const result = await addVolunteer({
      ...formData,
      status: 'interested',
    });
    setIsSubmitting(false);

    if (result.success) {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        interest: '',
        availability: '',
        message: '',
      });
      setTimeout(() => setStatus(null), 5000);
    } else {
      setStatus('error');
      setErrorMessage('We could not save your details right now. Please try again.');
      setTimeout(() => {
        setStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="volunteer" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              <FaHandsHelping /> Join the Movement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Volunteer With Purpose
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Lend your time, skills, and heart. From on-the-ground relief to remote mentoring, there is a place for everyone.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 flex gap-3 items-start">
                <div className="bg-white p-3 rounded-xl shadow">
                  <FaClock className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Flexible Time</p>
                  <p className="text-gray-600 text-sm">Weekend drives, evening mentorship, or on-call relief.</p>
                </div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 flex gap-3 items-start">
                <div className="bg-white p-3 rounded-xl shadow">
                  <FaMapMarkerAlt className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Local &amp; Remote</p>
                  <p className="text-gray-600 text-sm">Support nearby communities or volunteer from home.</p>
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                Hands-on events: food packing, distribution, and community cleanups.
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                Skill sharing: teach digital literacy, resume building, or language basics.
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                Remote support: mentor students, make wellness calls, or assist with fundraising.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaUserPlus className="text-orange-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Tell us about you</p>
                <p className="text-gray-600 text-sm">We will match you with the right opportunity.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Alex Jordan"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="alex@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2" htmlFor="interest">
                  Area of Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                >
                  <option value="">Select a focus</option>
                  <option value="Food relief">Food relief &amp; distribution</option>
                  <option value="Healthcare support">Healthcare support</option>
                  <option value="Education">Education &amp; mentoring</option>
                  <option value="Community events">Community events</option>
                  <option value="Remote support">Remote support</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2" htmlFor="availability">
                  Availability
                </label>
                <input
                  id="availability"
                  name="availability"
                  type="text"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Weekends, 5-8pm, once a month..."
                />
              </div>

              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2" htmlFor="message">
                  How would you like to help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Share your skills, ideas, or questions."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 flex items-center gap-3 text-green-700">
                  <FaCheckCircle />
                  Thanks for volunteering! We will reach out with next steps.
                </div>
              )}

              {status === 'error' && errorMessage && (
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 text-red-600">
                  {errorMessage}
                </div>
              )}

              {errorMessage && status === null && (
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 text-red-600">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Count Me In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
