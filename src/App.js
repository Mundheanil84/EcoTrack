import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardOverview from './pages/DashboardOverview';
import CarbonEmissions from './pages/CarbonEmissions';
import EnergyConsumption from './pages/EnergyConsumption';
import TransportationImpact from './pages/TransportationImpact';
import WasteManagement from './pages/WasteManagement';
import LoadingSpinner from './components/common/LoadingSpinner';
import './styles/App.css';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
}

function AppContent() {
  const { currentUser } = useAuth();
  const [isLoginMode, setIsLoginMode] = React.useState(true);

  if (currentUser === undefined) {
    return <LoadingSpinner />;
  }

  if (!currentUser) {
    return isLoginMode ? (
      <Login onToggleMode={() => setIsLoginMode(false)} />
    ) : (
      <Signup onToggleMode={() => setIsLoginMode(true)} />
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout>
              <DashboardOverview />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/emissions" element={
          <ProtectedRoute>
            <DashboardLayout>
              <CarbonEmissions />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/energy" element={
          <ProtectedRoute>
            <DashboardLayout>
              <EnergyConsumption />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/transport" element={
          <ProtectedRoute>
            <DashboardLayout>
              <TransportationImpact />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/waste" element={
          <ProtectedRoute>
            <DashboardLayout>
              <WasteManagement />
            </DashboardLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;