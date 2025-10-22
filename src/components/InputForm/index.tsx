import { FormGroup, Label, StyledInput } from './InputForm.styles';


type InputProps = {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

const InputForm = ({ label, value, onChange, type, placeholder }: InputProps) => {
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </FormGroup>
  );
};

export default InputForm;
