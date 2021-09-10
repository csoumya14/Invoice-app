import React, { useState } from 'react';
import { ListItem, Label, Input } from './ListItems.css';

const ListItems = ({ option, index }) => {
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
  };
  return (
    <ListItem className="list-items" key={option}>
      <Input
        type="checkbox"
        id={`custom-checkbox-${index}`}
        name={option}
        value={option}
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
      />
      <Label htmlFor={`custom-checkbox-${index}`}>{option}</Label>
    </ListItem>
  );
};

export default ListItems;
