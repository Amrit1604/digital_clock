import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(interval);
  }, []); 


  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="clock-container bg-gray-800 p-8 rounded-xl shadow-2xl">
        <h1 className="text-6xl font-mono text-green-500 tracking-wider text-glow">
          {formatTime(time)}
        </h1>
      </div>
    </div>
  );
};

export default DigitalClock;