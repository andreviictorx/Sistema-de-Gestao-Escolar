import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.bgCard};
  padding: 32px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  max-width: 500px;
  margin: 40px auto;

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  fieldset:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark};
  margin: 0 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const FormWarning = styled.p`
  background-color: #fffbe6;
  color: #92400e;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #fde68a;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-top: 24px;
`;
