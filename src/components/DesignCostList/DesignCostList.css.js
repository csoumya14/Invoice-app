import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 259px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background: #f9fafe;
`;
export const ListContainer = styled.dl`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
export const Description = styled.dd`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #0c0e16;
`;

export const Term = styled.dt`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0c0e16;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 1.25px;
  color: #7e88c3;
`;
