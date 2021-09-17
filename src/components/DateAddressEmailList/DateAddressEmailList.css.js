import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 255px;
  height: 209px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ListDl = styled.dl`
  width: 232px;
  height: 209px;
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
`;

export const Term = styled.dt`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #7e88c3;
  padding-bottom: 8px;
  padding-top: 1.5rem;
`;

export const Description = styled.dd`
  margin-left: 0rem;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
  color: #0c0e16;
`;

export const Address = styled.address`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 8px;
  letter-spacing: -0.229167px;
  color: #7e88c3;
`;
export const AddressTerm = styled.dt`
  padding-bottom: 0px;
  padding-top: 5px;
`;
