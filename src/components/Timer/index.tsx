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
      setIsWorking(!isWorking);
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

  return (
    <TimerContainer>
      <StyledTimer>{formatTime(timeLeft)}</StyledTimer>
      <Button onClick={handleStartPause}>
        {isRunning ? "PAUSE" : "START"}
      </Button>
    </TimerContainer>
  );
}

const TimerContainer = styled.div`
  width: 70%;
  height: 45vh;
  background-color: var(--pomodoro-light);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const StyledTimer = styled.p`
  font-size: 7rem;
  font-weight: 700;
`;
