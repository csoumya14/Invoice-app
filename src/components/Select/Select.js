import React, { useState, useRef, useEffect } from 'react';
import { Para, ArrowImg, Container, Button } from './Select.css';

import menu from '../../assets/icon-arrow-down.svg';
import FilterListContainer from '../List/FilterListContainer';

const FilterSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);

  const wrapKeyHandler = event => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      activatorRef.current.focus();
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const clickOutsideHandler = event => {
    if (
      dropdownListRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target)
    ) {
      return;
    }
    setIsOpen();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mouseup', clickOutsideHandler);
      //dropdownListRef.current.querySelector('a').focus();
    } else {
      document.removeEventListener('mouseup', clickOutsideHandler);
    }
    return () => {
      document.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [isOpen]);

  return (
    <Container className="dropdown" onKeyUp={wrapKeyHandler}>
      <Para>Filter</Para>
      <Button
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="dropdown1"
        ref={activatorRef}
        onClick={toggleNav}
      >
        <ArrowImg type="image" tabIndex="0" src={menu} alt="drop-down-button" isOpen={isOpen} />
      </Button>
      {isOpen && <FilterListContainer dropdownListRef={dropdownListRef} />}
    </Container>
  );
};

export default FilterSelect;
