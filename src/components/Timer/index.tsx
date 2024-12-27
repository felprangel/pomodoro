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
  const [workSessions, setWorkSessions] = useState<number>(1);

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    props.changeBgColor(isWorking);
  }, [isWorking, props]);

  useEffect(() => {
    function sendNotification() {
      if (Notification.permission === "granted") {
        new Notification("Pomodoro Timer", {
          body: isWorking
            ? "Time to take a break!"
            : "Time to get back to work!",
        });
      }
    }

    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else if (timer) {
      clearInterval(timer);
    }

    if (timeLeft === 0) {
      if (!isWorking) {
        setWorkSessions(workSessions + 1);
      }

      const nextIsWorking = !isWorking;
      const nextTime = nextIsWorking
        ? workTime * 60
        : workSessions > 1 && workSessions % 4 === 0
        ? longBreakTime * 60
        : shortBreakTime * 60;

      setIsWorking(nextIsWorking);
      setTimeLeft(nextTime);
      setIsRunning(false);
      playSound();
      sendNotification();
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

  function playSound() {
    const audio = new Audio("alarm.mp3");
    audio.play();
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

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledTimer = styled.p`
  font-size: 7rem;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
