import React, { createContext, useContext, useReducer } from 'react';

const CarbonContext = createContext();

const initialState = {
  activities: [],
  totalEmission: 0,
};

function carbonReducer(state, action) {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      const newActivity = action.payload;
      const updatedActivities = [...state.activities, newActivity];
      const newTotal = updatedActivities.reduce((sum, act) => sum + act.emission, 0);
      return {
        ...state,
        activities: updatedActivities,
        totalEmission: newTotal,
      };
    case 'RESET_ACTIVITIES':
      return initialState;
    default:
      return state;
  }
}

export function CarbonProvider({ children }) {
  const [state, dispatch] = useReducer(carbonReducer, initialState);
  return (
    <CarbonContext.Provider value={{ state, dispatch }}>
      {children}
    </CarbonContext.Provider>
  );
}

export function useCarbon() {
  const context = useContext(CarbonContext);
  if (!context) {
    throw new Error('useCarbon must be used within a CarbonProvider');
  }
  return context;
}