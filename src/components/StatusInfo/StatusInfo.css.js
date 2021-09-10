import styled from 'styled-components';
import { StatusDiv, DotDiv, StatusP } from '../../containers/InvoiceList/InvoiceList.css';

export const Container = styled.div`
  width: 327px;
  height: 91px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
`;
export const Dot = styled(DotDiv)`
  height: 8px;
  width: 8px;

  margin-right: 0.3rem;
  background: ${props => props.theme[0]};
  border-radius: 50%;
`;
export const StatusText = styled(StatusP)`
  text-transform: capitalize;
  font-size: 12px;
  font-weight: bold;

  color: ${props => props.theme[0]};
`;

export const Status = styled(StatusDiv)`
  width: 104px;
  height: 40px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${props => props.theme[1]};
  justify-content: center;
`;

export const TextStatus = styled.p`
  font-size: 12px;
  color: #858bb2;
  font-weight: 500;
`;
