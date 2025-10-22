import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textDark};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`;
