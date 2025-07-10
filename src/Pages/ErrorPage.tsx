import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-yellow-300 to-blue-400 p-6 text-white font-mono">
      <div className="bg-white text-gray-800 shadow-xl rounded-3xl p-8 w-full max-w-md space-y-6 text-center">
        <h2 className="text-3xl font-bold text-pink-600"> Error</h2>
        <h1 className="text-lg text-gray-500">❌ No questions found. Please try again later.</h1>


        <button
          onClick={() => navigate('/')} // Navigate back to home
          className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
        >
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
