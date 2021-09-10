import styled from 'styled-components';

export const ButtonElement = styled.button`
  background-image: ${({ theme }) => theme.backgroundImage};

  background-size: cover;
  background-color: transparent;

  border: none;
  width: 19.32px;
  height: 20px;
`;
