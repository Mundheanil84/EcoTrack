import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardOverview() {
  const stats = [
    { title: 'Carbon Saved', value: '250 kg', change: '+12%', color: 'text-green-600', icon: '🌿' },
    { title: 'Energy Used', value: '320 kWh', change: '-8%', color: 'text-blue-600', icon: '⚡' },
    { title: 'Transport Miles', value: '180 mi', change: '-15%', color: 'text-purple-600', icon: '🚗' },
    { title: 'Waste Reduced', value: '45 kg', change: '+20%', color: 'text-red-600', icon: '🗑️' },
  ];

  const quickActions = [
    { to: '/emissions', title: 'Log Emission', icon: '📊', color: 'bg-blue-100 text-blue-600' },
    { to: '/energy', title: 'Track Energy', icon: '⚡', color: 'bg-yellow-100 text-yellow-600' },
    { to: '/transport', title: 'Add Trip', icon: '🚗', color: 'bg-purple-100 text-purple-600' },
    { to: '/waste', title: 'Record Waste', icon: '🗑️', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Eco Warrior! 🌍</h1>
        <p className="text-green-100">You're making a positive impact on our planet. Keep it up!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm font-semibold ${stat.color}`}>{stat.change}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.to}
            className={`p-4 rounded-xl shadow-md transition-transform hover:scale-105 ${action.color}`}
          >
            <div className="text-center">
              <span className="text-3xl mb-2">{action.icon}</span>
              <p className="font-semibold">{action.title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {['Logged car trip (15 km)', 'Reduced electricity usage', 'Recycled 5kg waste', 'Used public transport'].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-green-500">✅</span>
              <p className="text-gray-700">{activity}</p>
              <span className="text-sm text-gray-500 ml-auto">2h ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}