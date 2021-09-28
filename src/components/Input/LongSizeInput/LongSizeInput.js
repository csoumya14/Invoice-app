import { InputContainer, Input, Label } from './LongSizeInput.css';
const LongInput = props => {
  return (
    <InputContainer>
      <Label htmlFor={props.nameId}>{props.labelText}</Label>
      <Input
        type={props.type}
        id={props.nameIds}
        name={props.nameIds}
        required
        minLength={props.minLength}
        maxLength={props.maxLength}
        defaultValue={props.defaultValue}
      />
    </InputContainer>
  );
};

export default LongInput;
