import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  max-height: 100%;
`;

export const Button = styled.button`
  height: 2rem;
  background: transparent;
  outline: none;
  border: none;
  object-fit: cover;
`;

export const Para = styled.p`
  color: #0c0e16;
  font-weight: bold;
`;

export const ArrowImg = styled.input`
  margin-right: 0rem;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(360deg)')};
  transition: opacity ease-in-out 0.5s;
`;
