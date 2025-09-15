import React, { useState, useEffect } from 'react';

// Mock carbon intensity data for demo
const mockIntensityData = {
  intensity: {
    actual: 187,
    forecast: 192,
    index: "moderate"
  },
  from: new Date().toISOString()
};

export default function CarbonIntensity() {
  const [intensity, setIntensity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIntensity = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // For demo purposes, using mock data
        // In real app: const data = await carbonAPI.getCurrentCarbonIntensity();
        setTimeout(() => {
          setIntensity(mockIntensityData);
          setLoading(false);
        }, 800);
        
      } catch (err) {
        setError('Failed to load carbon data');
        setIntensity(mockIntensityData); // Fallback to mock data
        setLoading(false);
      }
    };

    fetchIntensity();
    const interval = setInterval(fetchIntensity, 300000);

    return () => clearInterval(interval);
  }, []);

  const getIntensityColor = (index) => {
    const value = intensity?.intensity?.actual || 0;
    if (value <= 150) return 'text-green-500';
    if (value <= 250) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getIntensityLevel = (value) => {
    if (value <= 150) return 'Low';
    if (value <= 250) return 'Moderate';
    return 'High';
  };

  const getIntensityEmoji = (value) => {
    if (value <= 150) return '✅';
    if (value <= 250) return '⚠️';
    return '❌';
  };

  if (loading) {
    return (
      <div className="card animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    );
  }

  const currentIntensity = intensity?.intensity?.actual || 0;

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Carbon Intensity</h3>
      
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4 rounded">
          <p className="text-sm text-yellow-700">{error}</p>
        </div>
      )}
      
      {intensity ? (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600">Current Level</span>
            <span className={`font-bold ${getIntensityColor(currentIntensity)}`}>
              {getIntensityEmoji(currentIntensity)} {getIntensityLevel(currentIntensity)}
            </span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Intensity</span>
            <span className="font-semibold">
              {currentIntensity} gCO₂/kWh
            </span>
          </div>
          
          <div className="bg-gray-100 rounded-full h-2 mb-3">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.min((currentIntensity / 300) * 100, 100)}%` 
              }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>0</span>
            <span>150</span>
            <span>250</span>
            <span>300+</span>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            📈 Forecast: {intensity.intensity?.forecast || 'N/A'} gCO₂/kWh
          </p>
          
          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              {currentIntensity <= 150 ? '✅ Great time to use electricity!' : 
               currentIntensity <= 250 ? '⚠️ Consider reducing energy use' : 
               '❌ Try to minimize electricity usage'}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Intensity data unavailable</p>
      )}
    </div>
  );
}