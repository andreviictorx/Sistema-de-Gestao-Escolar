import styled from "styled-components";


export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 24px;
`;

export const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  width: 20px;
  height: 20px;
  pointer-events: none; 
`;


export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px 12px 45px; 
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.textDark};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;
