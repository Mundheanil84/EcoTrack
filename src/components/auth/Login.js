import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AuthForm from './AuthForm';

export default function Login({ onToggleMode }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      const result = await login(formData.email, formData.password);
      
      if (!result.success) {
        setError(result.error);
      }
    } catch {
      setError('Failed to log in');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div>
          <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🌱</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Login to EcoTrack
          </h2>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <AuthForm 
          onSubmit={handleSubmit}
          loading={loading}
          buttonText="Login"
        />
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onToggleMode}
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}