import React from 'react';

export default function TransportationImpact() {
  const transportData = [
    { type: 'Car', distance: 150, co2: 31.5, icon: '🚗', color: 'bg-red-100 text-red-600' },
    { type: 'Bus', distance: 80, co2: 6.4, icon: '🚌', color: 'bg-blue-100 text-blue-600' },
    { type: 'Train', distance: 200, co2: 10.0, icon: '🚆', color: 'bg-green-100 text-green-600' },
    { type: 'Bicycle', distance: 50, co2: 0, icon: '🚴', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Transportation Impact 🚗</h1>
        <p className="text-purple-100">Monitor your travel carbon footprint</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">This Week's Travel</h3>
          <div className="space-y-4">
            {transportData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className={`p-2 rounded-lg ${item.color}`}>{item.icon}</span>
                  <div>
                    <p className="font-medium">{item.type}</p>
                    <p className="text-sm text-gray-500">{item.distance} km</p>
                  </div>
                </div>
                <span className="font-bold text-gray-700">{item.co2} kg CO₂</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Add New Trip</h3>
          <form className="space-y-4">
            <div>
              <label className="form-label">Transport Type</label>
              <select className="input-field">
                <option>Car</option>
                <option>Bus</option>
                <option>Train</option>
                <option>Bicycle</option>
                <option>Walking</option>
              </select>
            </div>
            <div>
              <label className="form-label">Distance (km)</label>
              <input type="number" className="input-field" placeholder="Enter distance" />
            </div>
            <button className="w-full btn-primary">Add Trip</button>
          </form>
        </div>
      </div>
    </div>
  );
}