import { InputContainer, Input, Label } from './LongSizeInput.css';
const DateInput = props => {
  return (
    <InputContainer>
      <Label htmlFor={props.nameId}>{props.labelText}</Label>
      <Input
        type={props.type}
        id={props.nameIds}
        name={props.nameIds}
        required
        min={props.minLength}
        max={props.maxLength}
        defaultValue={props.defaultValue}
      />
    </InputContainer>
  );
};

export default DateInput;
