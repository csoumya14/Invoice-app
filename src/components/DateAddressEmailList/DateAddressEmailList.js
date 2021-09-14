import { ListContainer, Term, Description, ListDl, Address } from './DateAddressEmailList.css';
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
        <Description>{chosenInvoice.clientEmail}</Description>
        <Term>Bill to</Term>
        <Description>{chosenInvoice.clientName}</Description>
      </ListDl>
      <Address>
        <p>{chosenInvoice.clientAddress.street}</p>
        <p>{chosenInvoice.clientAddress.city}</p>
        <p>{chosenInvoice.clientAddress.postCode}</p>
        <p>{chosenInvoice.clientAddress.country}</p>
      </Address>
    </ListContainer>
  );
};

export default DateAddressEmail;
