import { StyledButton } from './Button.styles';


type ButtonProps = {
  texto: string;
  type: 'submit' | 'reset' | 'button';
  click?: () => void;
  variant?: 'primary' | 'accent' | 'danger';
};

const Button = ({ texto, click, ...props }: ButtonProps) => {

  return (
    <StyledButton onClick={click} {...props}>
      {texto}
    </StyledButton>
  );
};

export default Button;