import React from 'react';
import { Input, Label, InputContainer } from './TermListInput.css';
const DetailListInput = props => {
  const TermsList = [30, 1, 7, 14];
  return (
    <InputContainer>
      <Label htmlFor="terms">Payment Terms</Label>
      <Input list="terms" name="browser" />
      <dataList id="terms">
        {TermsList.map(listItem => (
          <option key={listItem} value={`Net ${listItem} days`} />
        ))}
      </dataList>
    </InputContainer>
  );
};

export default DetailListInput;
