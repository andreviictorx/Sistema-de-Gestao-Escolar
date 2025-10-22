import styled from "styled-components";

export const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ActivityItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgLight};
  }
`;

export const ActivityName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const ActivityDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
