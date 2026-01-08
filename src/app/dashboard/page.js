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
} from '@/services/firebaseService';

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
        // Fetch donation statistics
        const statsResult = await getDonationStats();
        if (statsResult.success) {
          setStats(statsResult.data);
        }

        // Fetch recent donations
        const donationsResult = await getRecentDonations(5);
        if (donationsResult.success) {
          setRecentDonations(donationsResult.data);
        }

        // Fetch messages
        const messagesResult = await getMessages(true); // Only unread
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
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Total Donations',
      value: stats.totalDonations.toLocaleString(),
      icon: FaHandHoldingHeart,
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-500/10',
    },
    {
      title: 'Average Donation',
      value: `$${stats.averageDonation.toFixed(2)}`,
      icon: FaChartLine,
      color: 'from-sky-500 to-blue-500',
      bgColor: 'bg-sky-500/10',
    },
    {
      title: 'Unread Messages',
      value: messages.length,
      icon: FaEnvelope,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">
              Impact Dashboard
            </span>
          </h1>
          <p className="text-neutral-400 text-lg">
            Track our progress and see the difference we're making together
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} border border-neutral-800 rounded-xl p-6 backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
              </div>
              <h3 className="text-neutral-400 text-sm font-semibold mb-2">
                {stat.title}
              </h3>
              <p className="text-white text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
              <FaHandHoldingHeart className="text-pink-500" />
              Recent Donations
            </h2>
            <div className="space-y-4">
              {recentDonations.length > 0 ? (
                recentDonations.map((donation, index) => (
                  <div
                    key={index}
                    className="bg-neutral-700/50 rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-white font-semibold">
                        {donation.donorName || 'Anonymous'}
                      </p>
                      <p className="text-neutral-400 text-sm">
                        {donation.donorEmail || 'No email provided'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold text-lg">
                        ${donation.amount}
                      </p>
                      <p className="text-neutral-500 text-xs">
                        {donation.timestamp?.toDate?.()?.toLocaleDateString() || 'Recent'}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-neutral-500 text-center py-8">
                  No donations yet. Be the first to contribute!
                </p>
              )}
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
              <FaEnvelope className="text-sky-500" />
              Unread Messages
            </h2>
            <div className="space-y-4">
              {messages.length > 0 ? (
                messages.slice(0, 5).map((message, index) => (
                  <div
                    key={index}
                    className="bg-neutral-700/50 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-white font-semibold">
                        {message.name || 'Anonymous'}
                      </p>
                      <span className="bg-sky-500/20 text-sky-400 text-xs px-2 py-1 rounded">
                        New
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mb-2">
                      {message.subject || 'No subject'}
                    </p>
                    <p className="text-neutral-500 text-xs line-clamp-2">
                      {message.message}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-neutral-500 text-center py-8">
                  No new messages
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Our Collective Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <p className="text-neutral-400">Lives Impacted</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-neutral-400">Active Volunteers</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-neutral-400">Communities Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
