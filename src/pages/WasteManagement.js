import React from 'react';

export default function WasteManagement() {
  const wasteData = [
    { type: 'Recycled', amount: 25, icon: '♻️', color: 'bg-green-100 text-green-600' },
    { type: 'Composted', amount: 15, icon: '🌱', color: 'bg-brown-100 text-brown-600' },
    { type: 'Landfill', amount: 10, icon: '🗑️', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Waste Management 🗑️</h1>
        <p className="text-red-100">Track and reduce your waste production</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wasteData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className={`w-16 h-16 ${item.color.split(' ')[0]} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl">{item.icon}</span>
            </div>
            <h3 className="font-semibold mb-2">{item.type}</h3>
            <p className="text-2xl font-bold">{item.amount} kg</p>
            <p className="text-sm text-gray-500">this month</p>
          </div>
        ))}
      </div>
    </div>
  );
}