import { emissionFactors } from '../data/emissionFactors';

export function useCarbonCalculator() {
  const calculateEmission = (activityType, value) => {
    const factor = emissionFactors[activityType];
    if (!factor) return 0;
    return value * factor;
  };

  return { calculateEmission };
}