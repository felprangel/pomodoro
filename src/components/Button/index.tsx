import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface PomodoroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  working: boolean
}

export function Button({ working, ...props }: PomodoroButtonProps) {
  return (
    <PomodoroButton working={working} {...props}>
      {props.children}
    </PomodoroButton>
  )
}

const PomodoroButton = styled.button<{ working: boolean }>`
  background-color: var(--white);
  color: ${props => (props.working ? 'var(--pomodoro)' : 'var(--break-time)')};
  padding: 1rem 3rem;
  font-weight: 700;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: var(--white-shadow) 0px 6px 0px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`
