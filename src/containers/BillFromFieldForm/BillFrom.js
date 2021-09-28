import LongSizeInput from '../../components/Input/LongSizeInput/LongSizeInput';
import ShortSizeInput from '../../components/Input/ShortSizeInput/ShortSizeInput';
import { FormContainer, ShortSizeInputContainer, Heading6 } from './BillFrom.css';
const BillFromField = ({ chosenInvoice }) => {
  return (
    <FormContainer>
      <Heading6>Bill From</Heading6>
      <LongSizeInput
        type="text"
        nameId="streetName"
        minLength="8"
        maxLength="18"
        defaultValue={chosenInvoice.senderAddress.street}
        labelText="Street Address"
      />
      <ShortSizeInputContainer>
        <ShortSizeInput
          type="text"
          nameId="city"
          minLength="4"
          maxLength="18"
          defaultValue={chosenInvoice.senderAddress.city}
          labelText="City"
        />
        <ShortSizeInput
          type="text"
          nameId="postCode"
          minLength="4"
          maxLength="7"
          defaultValue={chosenInvoice.senderAddress.postCode}
          labelText="Post Code"
        />
      </ShortSizeInputContainer>

      <LongSizeInput
        type="text"
        nameId="country"
        minLength="4"
        maxLength="18"
        defaultValue={chosenInvoice.senderAddress.country}
        labelText="Country"
      />
    </FormContainer>
  );
};

export default BillFromField;

/*
<label htmlFor="streetName">Street Address</label>
      <input
        type="text"
        id="streetName"
        name="streetName"
        required
        minLength="8"
        maxLength="18"
        defaultValue={chosenInvoice.senderAddress.street}
      />
      */
