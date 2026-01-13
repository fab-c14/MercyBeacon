'use client';

import React from 'react';
import { FaGlobeAmericas, FaTint, FaSchool, FaClinicMedical, FaSmile, FaLeaf } from 'react-icons/fa';

const metrics = [
  { value: '120K+', label: 'Meals Delivered', detail: 'to families in crisis' },
  { value: '18K+', label: 'Children Educated', detail: 'through scholarships and tutoring' },
  { value: '250+', label: 'Medical Camps', detail: 'set up for remote communities' },
  { value: '60+', label: 'Clean Water Wells', detail: 'providing safe drinking water' },
];

const initiatives = [
  {
    icon: FaClinicMedical,
    title: 'Emergency Care',
    description: 'Rapid-response medical teams reach disaster zones with supplies and onsite care.',
    color: 'bg-orange-50',
  },
  {
    icon: FaSchool,
    title: 'Learning Hubs',
    description: 'Community classrooms with internet access, mentorship, and STEAM kits for kids.',
    color: 'bg-blue-50',
  },
  {
    icon: FaLeaf,
    title: 'Sustainable Farming',
    description: 'Seed banks, training, and tools that help families grow food year-round.',
    color: 'bg-green-50',
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
            <FaGlobeAmericas /> Real Outcomes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Our Impact In Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transparent, trackable work that turns generosity into measurable change for the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-4xl font-bold text-orange-500 mb-2">{item.value}</p>
              <p className="text-gray-900 font-semibold mb-1">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => (
            <div
              key={initiative.title}
              className={`${initiative.color} border-2 border-gray-200 rounded-2xl p-6 shadow-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-3 rounded-xl shadow">
                  <initiative.icon className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{initiative.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
            </div>
          ))}

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaTint className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Stories From the Field</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="bg-gray-50 rounded-xl p-4">
                A new well in Hope Village now gives 300 families clean water without a two-hour walk.
              </li>
              <li className="bg-gray-50 rounded-xl p-4">
                Community classrooms in North Ridge helped 120 students improve math scores by 30%.
              </li>
              <li className="bg-gray-50 rounded-xl p-4">
                Mobile clinics reached flood-affected regions within 48 hours, providing essential care.
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3 text-green-700 font-semibold">
              <FaSmile className="text-green-600" />
              Every number above represents a family whose everyday life just got a little easier.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
