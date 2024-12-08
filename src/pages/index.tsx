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
  background-color: red;
  border: 1px solid black;
  min-height: 100vh;
  min-width: 100vw;
`;
