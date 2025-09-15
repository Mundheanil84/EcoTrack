import React, { useState } from 'react';
import { useCarbon } from '../../contexts/CarbonContext';
import { useCarbonCalculator } from '../../hooks/useCarbonCalculator';

export default function ActivityForm() {
  const [type, setType] = useState('car');
  const [value, setValue] = useState('');
  const { dispatch } = useCarbon();
  const { calculateEmission } = useCarbonCalculator();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emission = calculateEmission(type, parseFloat(value));
    dispatch({
      type: 'ADD_ACTIVITY',
      payload: { 
        type, 
        value: parseFloat(value), 
        emission, 
        date: new Date().toLocaleDateString() 
      },
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
      <h3>Log New Activity</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Activity Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="car">Car (km)</option>
            <option value="bus">Bus (km)</option>
            <option value="train">Train (km)</option>
            <option value="meat">Meat (kg)</option>
            <option value="vegetables">Vegetables (kg)</option>
            <option value="electricity">Electricity (kWh)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
            required
            step="0.1"
            min="0"
          />
        </div>
      </div>
      
      <button type="submit" className="auth-btn">Add Activity</button>
    </form>
  );
}