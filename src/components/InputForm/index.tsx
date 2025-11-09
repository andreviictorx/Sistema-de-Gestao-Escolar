import { forwardRef } from 'react';
import { FormGroup, Label, StyledInput } from './InputForm.styles';


type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
}

const InputForm = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {

    return (
      <FormGroup>
        {label && <Label>{label}</Label>}

        <StyledInput
          ref={ref}
          {...props}

        />
      </FormGroup>
    )
  });

export default InputForm;
