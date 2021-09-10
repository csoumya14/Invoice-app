import React from 'react';
import { Container, Status, StatusText, Dot, TextStatus } from './StatusInfo.css';
import { checkStatus } from '../../helpers/colorCheckStatus';

const StatusInfo = ({ chosenInvoice }) => {
  return (
    <Container>
      <TextStatus>Status</TextStatus>
      <Status theme={checkStatus(chosenInvoice.status)}>
        <Dot theme={checkStatus(chosenInvoice.status)}></Dot>
        <StatusText theme={checkStatus(chosenInvoice.status)}>{chosenInvoice.status}</StatusText>
      </Status>
    </Container>
  );
};

export default StatusInfo;
