import React from 'react';
import DigitalClock from './digitalclock.js';
import './digitalclock.css';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Digital Clock App
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <DigitalClock />
      </main>
    </div>
  );
};

export default App;