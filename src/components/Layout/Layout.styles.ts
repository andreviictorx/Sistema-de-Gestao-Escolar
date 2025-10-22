import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgLight};
`;

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.bgCard};
  padding: 0 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 32px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;
