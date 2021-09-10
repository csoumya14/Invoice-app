import React from 'react';
import { ListContainer } from './FilterListContainer.css';
import ListItems from './ListItems';

export const FilterListContainer = ({ dropdownListRef }) => {
  const Options = ['Draft', 'Pending', 'Paid'];

  return (
    <ListContainer ref={dropdownListRef} id="dropdown1" tabIndex="-1" className="menu">
      {Options.map((option, index) => {
        return <ListItems key={index} option={option} index={index} />;
      })}
    </ListContainer>
  );
};

export default FilterListContainer;
