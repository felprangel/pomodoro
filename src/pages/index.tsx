import { Header } from '@/components/Header'
import PageLayout from '@/components/PageLayout'
import { Timer } from '@/components/Timer'
import { useState } from 'react'
import styled from 'styled-components'

export default function Home() {
  const [isWorking, setIsWorking] = useState<boolean>(true)

  return (
    <>
      <Header />
      <CustomPageLayout working={isWorking}>
        <Timer changeBgColor={setIsWorking} />
      </CustomPageLayout>
    </>
  )
}

const CustomPageLayout = styled(PageLayout)<{ working: boolean }>`
  background-color: ${props => (props.working ? 'var(--pomodoro)' : 'var(--break-time)')};
  color: var(--white);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
