import React from 'react';
import { useCarbon } from '../../contexts/CarbonContext';

export default function CarbonStats() {
  const { state } = useCarbon();
  
  const equivalentTrees = (state.totalEmission / 21.77).toFixed(1); // kg CO2 absorbed by tree per year
  const equivalentMiles = (state.totalEmission / 0.404).toFixed(0); // kg CO2 per mile driven

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Emissions</span>
          <span className="font-semibold text-primary-600">
            {state.totalEmission.toFixed(2)} kg CO₂
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Equivalent to</span>
          <span className="font-semibold text-eco-green">
            {equivalentTrees} trees needed
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Or</span>
          <span className="font-semibold text-eco-amber">
            {equivalentMiles} miles driven
          </span>
        </div>
        
        <div className="pt-3 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Activities logged</span>
            <span className="font-semibold">{state.activities.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}