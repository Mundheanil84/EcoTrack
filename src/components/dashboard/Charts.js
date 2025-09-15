import React from 'react';
import { useCarbon } from '../../contexts/CarbonContext';

export default function Charts() {
  const { state } = useCarbon();

  // Simple chart implementation - you can add Recharts later
  const data = state.activities.reduce((acc, act) => {
    const existing = acc.find(item => item.name === act.type);
    if (existing) {
      existing.value += act.emission;
    } else {
      acc.push({ name: act.type, value: act.emission });
    }
    return acc;
  }, []);

  return (
    <div className="chart-container">
      <h3>Emissions Overview</h3>
      {data.length === 0 ? (
        <p>No data yet. Add some activities to see your emissions chart.</p>
      ) : (
        <div className="simple-chart">
          {data.map((item, index) => (
            <div key={index} className="chart-item">
              <div className="chart-label">
                <span>{item.name}</span>
                <span>{item.value.toFixed(2)} kgCO2e</span>
              </div>
              <div className="chart-bar-container">
                <div 
                  className="chart-bar"
                  style={{ 
                    width: `${(item.value / state.totalEmission) * 100}%`,
                    backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}