import React, { useState, useEffect, useRef } from 'react';

 function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerId.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerId.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerId.current);
    }
    return () => clearInterval(timerId.current);
  }, [isRunning, timeLeft]);

  const handleSetTime = (e) => {
    e.preventDefault();
    const secs = parseInt(inputSeconds, 10);
    if (!isNaN(secs) && secs > 0) {
      setTimeLeft(secs);
      setIsRunning(false);
    }
  };

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInputSeconds('');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div >
      <h2>Countdown Timer</h2>
      
      <form onSubmit={handleSetTime} >
        <input
          type="number"
          placeholder="Enter seconds"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
          min="1"
         
        />
        <button >
          Set Time
        </button>
      </form>

      <div >
        {formatTime(timeLeft)}
      </div>

      <div>
        <button
          onClick={handleStart}
          disabled={isRunning || timeLeft === 0}
      
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          
        >
          Stop
        </button>
        <button
          onClick={handleReset}
       
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default CountdownTimer;