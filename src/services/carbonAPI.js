// Safe carbon API service with error handling
export const carbonAPI = {
  async getCurrentCarbonIntensity() {
    try {
      // Mock data for demo - replace with real API call
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [{
              intensity: {
                actual: Math.round(100 + Math.random() * 200), // Random between 100-300
                forecast: Math.round(100 + Math.random() * 200),
                index: "moderate"
              },
              from: new Date().toISOString()
            }]
          });
        }, 500);
      });
    } catch (error) {
      console.error('Carbon API error:', error);
      throw new Error('Failed to fetch carbon intensity data');
    }
  },

  async getRegionalData(postcode) {
    try {
      // Mock implementation
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [{
              shortname: "UK",
              data: [{
                intensity: {
                  forecast: Math.round(100 + Math.random() * 200),
                  actual: Math.round(100 + Math.random() * 200)
                }
              }]
            }]
          });
        }, 500);
      });
    } catch (error) {
      console.error('Regional API error:', error);
      throw new Error('Failed to fetch regional data');
    }
  }
};