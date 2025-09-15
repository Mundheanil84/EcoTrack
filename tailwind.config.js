/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        eco: {
          green: '#10b981',
          blue: '#3b82f6',
          amber: '#f59e0b',
        },
        brown: {
          100: '#f5f5f0',
          600: '#8b4513',
        }
      },
    },
  },
  plugins: [],
}