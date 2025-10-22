import styled from "styled-components";


export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  width: 100%
`;
export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.07);
  }
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CardValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
`;
