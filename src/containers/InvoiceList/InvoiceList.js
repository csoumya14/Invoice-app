import {
  ListItemContainer,
  Span,
  ListTwoItemsDiv,
  IdP,
  NameP,
  DateP,
  PriceDiv,
  DueDatePriceValue,
  StatusP,
  StatusDiv,
  DotDiv,
  MainContainer,
} from './InvoiceList.css';
//import { Link } from 'react-router-dom';
import { dateFormat } from '../../helpers/dateFormat';
import { priceValueFormat } from '../../helpers/priceValueFormat';
import { checkStatus } from '../../helpers/colorCheckStatus';

const InvoiceList = ({ invoiceData, handleClick }) => {
  console.log(invoiceData[0]);

  return (
    <MainContainer>
      {invoiceData.map(data => (
        <ListItemContainer key={data.id} to="/details" onClick={() => handleClick(data)}>
          <ListTwoItemsDiv>
            <IdP>
              <Span>#</Span>
              {data.id}
            </IdP>
            <NameP>{data.clientName}</NameP>
          </ListTwoItemsDiv>
          <ListTwoItemsDiv>
            <DueDatePriceValue>
              <DateP>Due{dateFormat(data.paymentDue)}</DateP>
              <PriceDiv>
                <span>&pound;</span> {priceValueFormat(data.total)}
              </PriceDiv>
            </DueDatePriceValue>
            <StatusDiv theme={checkStatus(data.status)}>
              <DotDiv theme={checkStatus(data.status)}></DotDiv>
              <StatusP theme={checkStatus(data.status)}>{data.status}</StatusP>
            </StatusDiv>
          </ListTwoItemsDiv>
        </ListItemContainer>
      ))}
    </MainContainer>
  );
};

export default InvoiceList;
/*

*/
