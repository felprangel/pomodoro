import PageLayout from "@/components/PageLayout";
import styled from "styled-components";

export default function Home() {
  return (
    <CustomPageLayout>
      <TimerContainer>
        <Timer>25:00</Timer>
      </TimerContainer>
    </CustomPageLayout>
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
  background-color: #c15c5c;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Timer = styled.p`
  font-size: 7rem;
  font-weight: 700;
`;
