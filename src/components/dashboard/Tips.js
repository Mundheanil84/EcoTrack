import React from 'react';

const tips = [
  "Use public transport to reduce emissions by up to 50% compared to driving",
  "Eating plant-based meals 2-3 times per week can significantly reduce your carbon footprint",
  "Turn off lights and electronics when not in use - standby power can account for 10% of home energy use",
  "Consider a programmable thermostat to optimize heating and cooling",
  "Air dry clothes instead of using a dryer when possible"
];

export default function Tips() {
  return (
    <div className="tips-card">
      <h3>Eco-Friendly Tips</h3>
      <ul>
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}