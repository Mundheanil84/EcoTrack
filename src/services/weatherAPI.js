// Safe weather API service with error handling
export const weatherAPI = {
  async getCurrentWeather(lat, lon) {
    try {
      // This would be your actual API call
      // For now, we'll return mock data
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            main: {
              temp: Math.round(15 + Math.random() * 20), // Random temp between 15-35°C
              humidity: Math.round(40 + Math.random() * 40) // Random humidity 40-80%
            },
            weather: [{
              description: ['clear', 'cloudy', 'rainy', 'sunny'][Math.floor(Math.random() * 4)] + ' sky',
              main: ['Clear', 'Clouds', 'Rain', 'Sunny'][Math.floor(Math.random() * 4)]
            }],
            wind: {
              speed: Math.random() * 10 // Random wind speed 0-10 m/s
            },
            name: 'Your Location'
          });
        }, 500);
      });
    } catch (error) {
      console.error('Weather API error:', error);
      throw new Error('Failed to fetch weather data');
    }
  }
};