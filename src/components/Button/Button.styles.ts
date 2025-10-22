import styled, {css} from "styled-components";

interface StyledButtonProps {
  variant?: "primary" | "accent" | "danger";
  isTab?: boolean;
  isActive?: boolean;
  isMobile?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`

  text-decoration: none;
  display: inline-block;
  margin: 5px 0;
  border-style: none;
  height: 40px;
  padding: 9px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
  font-weight: 500;
  color: white;

  
  background-color: ${({ variant = "primary", theme }) => {
    switch (variant) {
      case "accent":
        return theme.colors.accent;
      case "danger":
        return theme.colors.danger;
      case "primary":
      default:
        return theme.colors.primary;
    }
  }};

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }


  ${({ isTab }) =>
    isTab && 
    css`
      background-color: transparent;
      color: white;
      border: none;
      font-weight: 600;
      padding: 8px 12px;
      box-shadow: none;
      transform: none;

      &:hover {
        background-color: transparent;
        box-shadow: none;
        transform: none;
      }
    `}

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: white;
      color: ${theme.colors.primary};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    `}


  ${({ isMobile, theme }) =>
    isMobile &&
    css`
      @media (max-width: 768px) {
        display: block;
        color: transparent;
        font-size: 0;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 100;
        background-color: ${theme.colors.accent};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

        &::before {
          content: "+";
          color: white;
          font-size: 2rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: 700;
        }
      }
    `}
`;

