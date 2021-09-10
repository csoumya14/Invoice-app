import styled from 'styled-components';
import plus from '../../assets/icon-plus.svg';

export const ButtonElement = styled.button`
  background-image: url(${plus});
  background-size: cover;

  border: none;
  width: 10px;
  height: 10px;
`;
export const CircleAroundButton = styled.div`
  width: 32px;
  height: 32px;

  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  background-color: #ffffff;
`;
export const ButtonContainer = styled.div`
  width: 90px;
  height: 44px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #7c5dfa;
`;
export const TextElement = styled.span`
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
  margin-right: 0.5rem;
`;
