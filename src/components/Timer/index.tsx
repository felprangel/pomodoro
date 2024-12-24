import React, { useState, useEffect } from "react";

export function Timer() {
  const workTime = 25;
  const breakTime = 5;
  const [isWorking, setIsWorking] = useState(true);
  const [timeLeft, setTimeLeft] = useState(workTime * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else if (timer) {
      clearInterval(timer);
    }

    if (timeLeft === 0) {
      setIsWorking((prev) => !prev);
      setTimeLeft((isWorking ? breakTime : workTime) * 60);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft, isWorking, workTime, breakTime]);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  function handleStartPause() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setIsRunning(false);
    setIsWorking(true);
    setTimeLeft(workTime * 60);
  }

  return (
    <div>
      <div>{formatTime(timeLeft)}</div>
      <div>
        <button onClick={handleStartPause}>
          {isRunning ? "Pausar" : "Iniciar"}
        </button>
        <button onClick={handleReset}>Resetar</button>
      </div>
    </div>
  );
}
