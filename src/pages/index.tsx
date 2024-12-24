import { Header } from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import { Timer } from "@/components/Timer";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <CustomPageLayout>
        <Timer />
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
