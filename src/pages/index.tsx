import PageLayout from "@/components/PageLayout";
import styled from "styled-components";

export default function Home() {
  return (
    <CustomPageLayout>
      <h1>Teste</h1>
    </CustomPageLayout>
  );
}

const CustomPageLayout = styled(PageLayout)`
  background-color: var(--pomodoro);
  color: var(--white);
  min-height: 100vh;
  min-width: 100vw;
`;
