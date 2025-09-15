import React from 'react';

export default function EnergyConsumption() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Energy Consumption ⚡</h1>
        <p className="text-yellow-100">Track and optimize your energy usage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💡</span>
          </div>
          <h3 className="font-semibold mb-2">Electricity</h3>
          <p className="text-2xl font-bold text-yellow-600">120 kWh</p>
          <p className="text-sm text-green-600">↓ 15% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔥</span>
          </div>
          <h3 className="font-semibold mb-2">Gas</h3>
          <p className="text-2xl font-bold text-blue-600">45 units</p>
          <p className="text-sm text-green-600">↓ 8% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">☀️</span>
          </div>
          <h3 className="font-semibold mb-2">Solar</h3>
          <p className="text-2xl font-bold text-green-600">80 kWh</p>
          <p className="text-sm text-green-600">↑ 25% generated</p>
        </div>
      </div>
    </div>
  );
}