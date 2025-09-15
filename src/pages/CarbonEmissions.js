import React, { useState } from 'react';

export default function CarbonEmissions() {
  const [activeTab, setActiveTab] = useState('track');

  const emissionData = [
    { category: 'Transport', value: 120, color: 'bg-blue-500' },
    { category: 'Energy', value: 80, color: 'bg-yellow-500' },
    { category: 'Food', value: 60, color: 'bg-green-500' },
    { category: 'Waste', value: 40, color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Carbon Emissions Tracker 📊</h1>
        <p className="text-blue-100">Monitor and reduce your carbon footprint</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
        {['Track', 'Analyze', 'Goals'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              activeTab === tab.toLowerCase()
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'track' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Add Emission</h3>
            <form className="space-y-4">
              <div>
                <label className="form-label">Category</label>
                <select className="input-field">
                  <option>Transport</option>
                  <option>Energy</option>
                  <option>Food</option>
                  <option>Waste</option>
                </select>
              </div>
              <div>
                <label className="form-label">Value</label>
                <input type="number" className="input-field" placeholder="Enter value" />
              </div>
              <button className="w-full btn-primary">Add Emission</button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Emission Breakdown</h3>
            <div className="space-y-3">
              {emissionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${(item.value / 300) * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-bold">{item.value} kg</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}