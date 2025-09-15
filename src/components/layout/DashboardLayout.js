import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';

const menuItems = [
  { path: '/dashboard', name: '🌿 Overview', color: 'from-green-500 to-green-600' },
  { path: '/emissions', name: '📊 Carbon Tracker', color: 'from-blue-500 to-blue-600' },
  { path: '/energy', name: '⚡ Energy Consumption', color: 'from-yellow-500 to-yellow-600' },
  { path: '/transport', name: '🚗 Transportation', color: 'from-purple-500 to-purple-600' },
  { path: '/waste', name: '🗑️ Waste Management', color: 'from-red-500 to-red-600' },
  { path: '/reports', name: '📈 Reports & Insights', color: 'from-indigo-500 to-indigo-600' },
  { path: '/recommendations', name: '💡 Action Plans', color: 'from-pink-500 to-pink-600' },
];

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">EcoTrack Dashboard</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="text-lg mr-3">{item.name.split(' ')[0]}</span>
                  <span className="font-medium">{item.name.split(' ').slice(1).join(' ')}</span>
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
              <h3 className="font-semibold mb-2">🌍 Your Impact</h3>
              <p className="text-sm">You've saved 250kg CO₂ this month!</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}