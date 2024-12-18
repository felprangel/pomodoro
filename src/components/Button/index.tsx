import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <PomodoroButton {...props}>{props.children}</PomodoroButton>;
}

const PomodoroButton = styled.button`
  background-color: var(--white);
  color: var(--pomodoro);
  padding: 1rem 3rem;
  font-weight: 700;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
