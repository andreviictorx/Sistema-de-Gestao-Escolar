import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.textDark};
`;
