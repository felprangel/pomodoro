import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <CustomPageLayout>
        <TimerContainer>
          <Timer>25:00</Timer>
          <Button>START</Button>
        </TimerContainer>
      </CustomPageLayout>
    </>
  );
}

const CustomPageLayout = styled(PageLayout)`
  background-color: var(--pomodoro);
  color: var(--white);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const Timer = styled.p`
  font-size: 7rem;
  font-weight: 700;
`;
