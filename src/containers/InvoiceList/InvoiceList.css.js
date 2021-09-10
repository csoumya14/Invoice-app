import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ListItemContainer = styled(Link)`
  width: 327px;
  height: 134px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 1rem;
`;

export const Span = styled.span`
  color: #7e88c3;
`;
export const ListTwoItemsDiv = styled.div`
  display: flex;
  width: 85%;
  height: 30%;

  align-items: center;
  justify-content: space-between;
`;
export const IdP = styled.p`
  font-weight: bold;
  font-size: 12px;
`;
export const NameP = styled.p`
  color: #858bb2;
  font-weight: 500;
  font-size: 12px;
`;
export const DateP = styled.p`
  color: #858bb2;
  font-weight: 500;
  font-size: 12px;
`;
export const PriceDiv = styled.div`
  color: #0c0e16;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  font-size: 16px;
`;
export const DueDatePriceValue = styled.div``;
export const StatusP = styled.p`
  text-transform: capitalize;
  font-size: 12px;
  font-weight: bold;

  color: ${props => props.theme[0]};
`;
export const StatusDiv = styled.div`
  width: 104px;
  height: 40px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme[1]};
  justify-content: center;
`;
export const DotDiv = styled.div`
  height: 8px;
  width: 8px;

  margin-right: 0.3rem;
  background: ${props => props.theme[0]};
  border-radius: 50%;
`;
export const MainContainer = styled.div`
  padding-bottom: 5rem;
`;
