import {
  ListContainer,
  Term,
  Description,
  ListDl,
  Address,
  AddressTerm,
} from './DateAddressEmailList.css';
import { dateFormat } from '../../helpers/dateFormat';

const DateAddressEmail = ({ chosenInvoice }) => {
  return (
    <ListContainer>
      <ListDl>
        <Term>Invoice Date</Term>
        <Description>{dateFormat(chosenInvoice.createdAt)}</Description>
        <Term>Payment Due</Term>
        <Description>{dateFormat(chosenInvoice.paymentDue)}</Description>
        <Term>Sent to</Term>
        <Description style={{ width: '50%' }}>{chosenInvoice.clientEmail}</Description>
        <Term>Bill to</Term>
        <Description>{chosenInvoice.clientName}</Description>
        <AddressTerm></AddressTerm>
        <Description>
          <Address>
            <p>{chosenInvoice.clientAddress.street}</p>
            <p>{chosenInvoice.clientAddress.city}</p>
            <p>{chosenInvoice.clientAddress.postCode}</p>
            <p>{chosenInvoice.clientAddress.country}</p>
          </Address>
        </Description>
      </ListDl>
    </ListContainer>
  );
};

export default DateAddressEmail;
