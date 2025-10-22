import styled from "styled-components";

export const WidgetContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const WidgetTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const DashboardWidgets = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const WidgetContent = styled.div`

`;