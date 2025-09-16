# 🌱 EcoTrack - Carbon Footprint Tracker

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.8.0-CA4245?logo=reactrouter)](https://reactrouter.com/)

A beautiful, responsive web application that helps individuals understand, track, and reduce their carbon footprint through intuitive data visualization and personalized insights.

EcoTrack is a responsive web application that helps environmentally-conscious individuals 
understand and reduce their carbon footprint. It solves the problem of climate anxiety by 
turning abstract environmental impact into tangible, trackable data. Users can log daily 
activities like travel and energy use, and the app visualizes their carbon emissions, suggests 
reductions, and tracks progress over time. I built the frontend with React and styled it with 
Tailwind CSS, managing state using the Context API and useReducer hook to keep the 
bundle size small and performance high.

Demo: https://ecotrack-blue-zeta.vercel.app/

## 🚀 Features

- **📊 Multi-Page Dashboard:** Comprehensive overview with dedicated sections for different environmental impacts.
- **🌍 Carbon Emission Tracking:** Log and visualize CO2 emissions from transportation, energy, and more.
- **⚡ Energy Consumption Monitoring:** Track electricity, gas, and solar energy usage.
- **🚗 Transportation Impact Analysis:** Compare carbon costs of different travel methods (car, bus, train, bike).
- **🗑️ Waste Management Tracking:** Monitor recycling, compost, and landfill waste.
-  **🔐 User Authentication:** Secure login and signup with persistent sessions.
- **📈 Data Visualization:** Interactive charts and graphs using Recharts library.
-  **💡 Personalized Recommendations:** Actionable tips to reduce your environmental impact.
-  **🎯 Savings Calculator:** See financial and environmental savings from reduced consumption.
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile devices.

## 🛠️ Technology Stack

**Frontend:**
- [React.js](https://reactjs.org/) - UI framework
- [React Router v6](https://reactrouter.com/) - Navigation and routing
- [React Context API + useReducer](https://reactjs.org/docs/context.html) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling and design system
- [Recharts](https://recharts.org/) - Data visualization

**Development & Deployment:**
- [Create React App](https://create-react-app.dev/) - Build tooling
- [Netlify](https://www.netlify.com/) / [Vercel](https://vercel.com/) - Deployment hosting

## 📦 Installation & Setup

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ecotrack.git
   cd ecotrack
2 .Install dependencies

bash: npm install

3. Start the development server
bash: npm start

4 .The application will open at http://localhost:3000.

Build for production
bash : npm run build

## 🎯 Key Implementation Details
State Management
The application uses React's Context API with useReducer for predictable state management:

AuthContext: Manages user authentication state (login, logout, user data)

CarbonContext: Handles carbon activity logging and emission calculations

## Carbon Calculation Logic
Emission calculations are based on scientifically-established factors:

// Emission factors (kg CO2 per unit)
export const emissionFactors = {
  car: 0.21,        // per km, 
  bus: 0.08,        // per km, 
  train: 0.05,      // per km, 
  meat: 27,         // per kg,
  vegetables: 2,    // per kg, 
  electricity: 0.5, // per kWh
};

## 📸 Screenshots

### Login Screen
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/de9492d1-a255-44fe-9f34-bd580ce1f944" />

### Dashboard Overview
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/a919d92d-8d90-473d-96ab-f82ffae91de7" />

### Energy Page
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/2b9891af-0f36-4bd9-bea3-94cd96eb074c" />

### Transportation Page
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/cb24de3e-5485-48f7-b491-a7af850c7740" />

## 🚀 Future Enhancements

- Backend Integration: Node.js/Express server with PostgreSQL database
- Real API Integration: Live carbon intensity data and weather APIs
- Social Features: Friend connections, group challenges, and sharing
- Advanced Analytics: Machine learning for personalized predictions
- Mobile App: React Native version for iOS and Android
- Carbon Offset Marketplace: Integration with verified offset programs
- Multi-language Support: Internationalization for global users
- Advanced Reporting: PDF export of sustainability reports
