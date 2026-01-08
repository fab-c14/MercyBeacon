'use client';

import React, { useEffect, useState } from 'react';
import { 
  FaDollarSign, 
  FaUsers, 
  FaHandHoldingHeart, 
  FaChartLine,
  FaEnvelope
} from 'react-icons/fa';
import { 
  getDonationStats, 
  getRecentDonations, 
  getMessages 
} from '../../services/firebaseService';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalAmount: 0,
    totalDonations: 0,
    averageDonation: 0,
  });
  const [recentDonations, setRecentDonations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsResult = await getDonationStats();
        if (statsResult.success) {
          setStats(statsResult.data);
        }

        const donationsResult = await getRecentDonations(5);
        if (donationsResult.success) {
          setRecentDonations(donationsResult.data);
        }

        const messagesResult = await getMessages(true);
        if (messagesResult.success) {
          setMessages(messagesResult.data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const statCards = [
    {
      title: 'Total Raised',
      value: `$${stats.totalAmount.toLocaleString()}`,
      icon: FaDollarSign,
      bgColor: 'bg-orange-50',
      iconColor: 'bg-orange-500',
      textColor: 'text-orange-600',
    },
    {
      title: 'Total Donations',
      value: stats.totalDonations.toLocaleString(),
      icon: FaHandHoldingHeart,
      bgColor: 'bg-teal-50',
      iconColor: 'bg-teal-500',
      textColor: 'text-teal-600',
    },
    {
      title: 'Average Donation',
      value: `$${stats.averageDonation.toFixed(2)}`,
      icon: FaChartLine,
      bgColor: 'bg-blue-50',
      iconColor: 'bg-blue-500',
      textColor: 'text-blue-600',
    },
    {
      title: 'Unread Messages',
      value: messages.length,
      icon: FaEnvelope,
      bgColor: 'bg-green-50',
      iconColor: 'bg-green-500',
      textColor: 'text-green-600',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-900 text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Impact Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Track our progress and see the difference we're making together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} border-2 border-gray-200 rounded-2xl p-6`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.iconColor} p-3 rounded-xl`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-semibold mb-2">
                {stat.title}
              </h3>
              <p className={`${stat.textColor} text-3xl font-bold`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-gray-900 text-2xl font-bold mb-6 flex items-center gap-2">
              <FaHandHoldingHeart className="text-orange-500" />
              Recent Donations
            </h2>
            <div className="space-y-4">
              {recentDonations.length > 0 ? (
                recentDonations.map((donation, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-gray-900 font-semibold">
                        {donation.donorName || 'Anonymous'}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {donation.donorEmail || 'No email provided'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-bold text-lg">
                        ${donation.amount}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {donation.timestamp?.toDate?.()?.toLocaleDateString() || 'Recent'}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No donations yet. Be the first to contribute!
                </p>
              )}
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-gray-900 text-2xl font-bold mb-6 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              Unread Messages
            </h2>
            <div className="space-y-4">
              {messages.length > 0 ? (
                messages.slice(0, 5).map((message, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-gray-900 font-semibold">
                        {message.name || 'Anonymous'}
                      </p>
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {message.subject || 'No subject'}
                    </p>
                    <p className="text-gray-500 text-xs line-clamp-2">
                      {message.message}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No new messages
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-orange-50 border-2 border-orange-200 rounded-2xl p-8 shadow-lg">
          <h2 className="text-gray-900 text-2xl font-bold mb-6 text-center">
            Our Collective Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                10,000+
              </div>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                500+
              </div>
              <p className="text-gray-600">Active Volunteers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                50+
              </div>
              <p className="text-gray-600">Communities Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
