import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../Button";

interface TimerProps {
  changeBgColor: (isWorking: boolean) => void;
}

export function Timer(props: TimerProps) {
  const workTime = 25;
  const shortBreakTime = 5;
  const longBreakTime = 15;
  const [isWorking, setIsWorking] = useState<boolean>(true);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(workTime * 60);
  const [workSessions, setWorkSessions] = useState<number>(0);

  useEffect(() => {
    props.changeBgColor(isWorking);
  }, [isWorking, props]);

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
      if (isWorking) {
        setWorkSessions(workSessions + 1);
      }

      const nextIsWorking = !isWorking;
      const nextTime = nextIsWorking
        ? workTime * 60
        : workSessions > 0 && workSessions % 4 === 0
        ? longBreakTime * 60
        : shortBreakTime * 60;

      setIsWorking(nextIsWorking);
      setTimeLeft(nextTime);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [
    isRunning,
    timeLeft,
    isWorking,
    workSessions,
    workTime,
    shortBreakTime,
    longBreakTime,
  ]);

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
    <TimerContainer working={isWorking}>
      <StyledTimer>{formatTime(timeLeft)}</StyledTimer>
      <ButtonContainer>
        <Button working={isWorking} onClick={handleStartPause}>
          {isRunning ? "PAUSE" : "START"}
        </Button>
        <Button working={isWorking} onClick={handleReset}>
          RESET
        </Button>
      </ButtonContainer>
    </TimerContainer>
  );
}

const TimerContainer = styled.div<{ working: boolean }>`
  width: 70%;
  height: 45vh;
  background-color: ${(props) =>
    props.working ? "var(--pomodoro-light)" : "var(--break-time-light)"};
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
