import React, { useState } from 'react';

export default function SavingsCalculator() {
  const [formData, setFormData] = useState({
    currentSpend: '',
    reduction: '20'
  });

  const calculateSavings = () => {
    const spend = parseFloat(formData.currentSpend) || 0;
    const reduction = parseFloat(formData.reduction) / 100;
    return {
      monthly: (spend * reduction).toFixed(2),
      yearly: (spend * reduction * 12).toFixed(2),
      co2: (spend * reduction * 0.5).toFixed(1) // Example conversion factor
    };
  };

  const savings = calculateSavings();

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Savings Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="form-label">Monthly Energy Spend (£)</label>
          <input
            type="number"
            value={formData.currentSpend}
            onChange={(e) => setFormData({...formData, currentSpend: e.target.value})}
            className="input-field"
            placeholder="Enter amount"
          />
        </div>
        
        <div>
          <label className="form-label">Target Reduction (%)</label>
          <select
            value={formData.reduction}
            onChange={(e) => setFormData({...formData, reduction: e.target.value})}
            className="input-field"
          >
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
          </select>
        </div>
        
        {formData.currentSpend && (
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Potential Savings</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-600">£{savings.monthly}</p>
                <p className="text-sm text-green-700">Monthly</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">£{savings.yearly}</p>
                <p className="text-sm text-green-700">Yearly</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{savings.co2}kg</p>
                <p className="text-sm text-green-700">CO₂ Saved</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}