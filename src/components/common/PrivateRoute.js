import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  
  // In a real app, you might have a loading state
  return currentUser ? children : <LoadingSpinner />;
}