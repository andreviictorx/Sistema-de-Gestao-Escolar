import styled from "styled-components";

export const DetalhesContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  max-width: 900px;
  margin: 30px auto;
`;

export const DetalhesHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: 16px;
  margin-bottom: 24px;

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 28px;
  }

  p {
    margin: 4px 0 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 16px;
  }
`;

export const DetalhesBody = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const MainContent = styled.div`
  flex: 2;
`;

export const SidebarContent = styled.aside`
  flex: 1;
  padding-top: 10px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

export const StatItem = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  .value {
    font-size: 28px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  .label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 4px;
  }
`;

export const Section = styled.section`
  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.textDark};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    padding-bottom: 8px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textDark};
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bgLight};
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .aluno-matricula {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: 400;
  }
`;

export const BackButtonContainer = styled.div`
  margin-top: 24px;
`;
