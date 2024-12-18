import styled from "styled-components";

export function Header() {
  return (
    <HeaderContainer>
      <Titulo>Pomodoro</Titulo>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.nav`
  background-color: var(--pomodoro);
  color: var(--white);
  min-height: 4rem;
  width: 100%;
  position: fixed;
  padding: 0 4rem;
  display: flex;
  align-items: center;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;
