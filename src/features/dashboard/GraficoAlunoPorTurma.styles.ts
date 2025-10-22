import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  padding: 0 10px;
  width: 100%;
  gap: 12px;
`;

interface BarProps {
  "data-label": string;
}

export const Bar = styled.div<BarProps>`
  flex: 1;
  max-width: 40px;
  min-width: 20px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px 4px 0 0;
  position: relative;
  text-align: center;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &::after {
    content: "${(props) => props["data-label"]}";
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    width: 100%;
  }
`;

export const BarValue = styled.span`
  font-size: 14px;
`;
