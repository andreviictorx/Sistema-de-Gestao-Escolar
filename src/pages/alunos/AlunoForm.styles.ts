import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.bgCard};
  padding: 32px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  max-width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
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
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;
