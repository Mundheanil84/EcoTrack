import React, { useState, useEffect } from 'react';
import { CarbonProvider } from '../../contexts/CarbonContext';
import Navbar from '../common/Navbar';
import ActivityForm from './ActivityForm';
import CarbonStats from './CarbonStats';
import Tips from './Tips';
import Charts from './Charts';
import Leaderboard from './Leaderboard';
import WeatherWidget from './WeatherWidget';
import CarbonIntensity from './CarbonIntensity';
import SavingsCalculator from './SavingsCalculator';
import ErrorBoundary from '../common/ErrorBoundary';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CarbonProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Carbon Footprint Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Track and reduce your environmental impact in real-time
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Real-time Data Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ErrorBoundary>
                  <WeatherWidget />
                </ErrorBoundary>
                <ErrorBoundary>
                  <CarbonIntensity />
                </ErrorBoundary>
              </div>

              <ErrorBoundary>
                <ActivityForm />
              </ErrorBoundary>

              <ErrorBoundary>
                <Charts />
              </ErrorBoundary>

              <ErrorBoundary>
                <SavingsCalculator />
              </ErrorBoundary>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ErrorBoundary>
                <CarbonStats />
              </ErrorBoundary>
              <ErrorBoundary>
                <Tips />
              </ErrorBoundary>
              <ErrorBoundary>
                <Leaderboard />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </CarbonProvider>
  );
}