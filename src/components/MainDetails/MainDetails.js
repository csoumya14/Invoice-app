import { Wrapper, AddressDiv, Id, Description, IdDescription, Address } from './MainDetails.css';
import DateAddressEmailList from '../DateAddressEmailList/DateAddressEmailList';
import DesignCostList from '../DesignCostList/DesignCostList';
import TotalCost from '../TotalCost/TotalCost';
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
      <DateAddressEmailList chosenInvoice={chosenInvoice} />
      <DesignCostList chosenInvoice={chosenInvoice} />
      <TotalCost chosenInvoice={chosenInvoice} />
    </Wrapper>
  );
};

export default Details;
