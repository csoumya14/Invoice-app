import { Wrapper, AddressDiv, Id, Description, IdDescription, Address } from './MainDetails.css';
const Details = ({ chosenInvoice }) => {
  console.log(chosenInvoice);
  return (
    <Wrapper>
      <AddressDiv>
        <IdDescription>
          <Id>{chosenInvoice.id}</Id>
          <Description>{chosenInvoice.description}</Description>
        </IdDescription>
        <Address>
          <p>{chosenInvoice.senderAddress.street}</p>
          <p>{chosenInvoice.senderAddress.city}</p>
          <p>{chosenInvoice.senderAddress.postCode}</p>
          <p>{chosenInvoice.senderAddress.country}</p>
        </Address>
      </AddressDiv>
    </Wrapper>
  );
};

export default Details;
