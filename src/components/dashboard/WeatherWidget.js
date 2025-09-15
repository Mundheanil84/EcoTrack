import React, { useState, useEffect } from 'react';

// Mock weather data for demo purposes
const mockWeatherData = {
  main: {
    temp: 22,
    humidity: 65
  },
  weather: [{
    description: 'clear sky',
    main: 'Clear'
  }],
  wind: {
    speed: 3.6
  },
  name: 'London'
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // For demo purposes, we'll use mock data
        // In a real app, you would use the actual API call:
        /*
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const data = await weatherAPI.getCurrentWeather(
                  position.coords.latitude,
                  position.coords.longitude
                );
                setWeather(data);
              } catch (err) {
                setError('Failed to fetch weather data');
                setWeather(mockWeatherData); // Use mock data as fallback
              }
            },
            (err) => {
              setError('Location access denied');
              setWeather(mockWeatherData); // Use mock data as fallback
            }
          );
        } else {
          setError('Geolocation not supported');
          setWeather(mockWeatherData); // Use mock data as fallback
        }
        */
        
        // Using mock data for now to avoid API issues
        setTimeout(() => {
          setWeather(mockWeatherData);
          setLoading(false);
        }, 1000);
        
      } catch (err) {
        setError('Failed to load weather data');
        setWeather(mockWeatherData); // Fallback to mock data
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="card animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    );
  }

  const weatherIcon = () => {
    if (!weather?.weather?.[0]?.main) return '🌤️';
    
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes('cloud')) return '☁️';
    if (condition.includes('rain')) return '🌧️';
    if (condition.includes('snow')) return '❄️';
    if (condition.includes('clear')) return '☀️';
    if (condition.includes('thunder')) return '⛈️';
    return '🌤️';
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Local Weather</h3>
      
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4 rounded">
          <p className="text-sm text-yellow-700">{error}</p>
        </div>
      )}
      
      {weather ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">{weatherIcon()}</span>
            <div>
              <p className="text-2xl font-bold text-primary-600">
                {Math.round(weather.main?.temp || 0)}°C
              </p>
              <p className="text-gray-600 capitalize">
                {weather.weather?.[0]?.description || 'Unknown'}
              </p>
            </div>
          </div>
          
          <div className="text-right space-y-1">
            <p className="text-sm text-gray-600">
              💧 {weather.main?.humidity || 0}%
            </p>
            <p className="text-sm text-gray-600">
              💨 {Math.round((weather.wind?.speed || 0) * 3.6)} km/h
            </p>
            {weather.name && (
              <p className="text-xs text-gray-500 mt-1">{weather.name}</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Weather data unavailable</p>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          {weather?.main?.temp > 20 ? '☀️ Perfect day to walk instead of drive!' : '🌧️ Consider public transport today'}
        </p>
      </div>
    </div>
  );
}