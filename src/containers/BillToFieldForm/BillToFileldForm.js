import LongSizeInput from '../../components/Input/LongSizeInput/LongSizeInput';
import ShortSizeInput from '../../components/Input/ShortSizeInput/ShortSizeInput';
import { FormContainer, ShortSizeInputContainer, Heading6 } from './BillToFieldForm.css';

const BillToField = ({ chosenInvoice }) => {
  return (
    <FormContainer>
      <Heading6>Bill To</Heading6>
      <LongSizeInput
        type="text"
        nameId="clientName"
        minLength="8"
        maxLength="18"
        defaultValue={chosenInvoice.clientName}
        labelText="Client's Name"
      />
      <LongSizeInput
        type="email"
        nameId="email"
        minLength="10"
        maxLength="18"
        defaultValue={chosenInvoice.clientEmail}
        labelText="Client's Email"
      />
      <LongSizeInput
        type="text"
        nameId="streetAddress"
        minLength="10"
        maxLength="18"
        defaultValue={chosenInvoice.clientAddress.street}
        labelText="Streets Address"
      />
      <ShortSizeInputContainer>
        <ShortSizeInput
          type="text"
          nameId="city"
          minLength="4"
          maxLength="18"
          defaultValue={chosenInvoice.clientAddress.city}
          labelText="City"
        />
        <ShortSizeInput
          type="text"
          nameId="postCode"
          minLength="4"
          maxLength="7"
          defaultValue={chosenInvoice.clientAddress.postCode}
          labelText="Post Code"
        />
      </ShortSizeInputContainer>

      <LongSizeInput
        type="text"
        nameId="country"
        minLength="4"
        maxLength="18"
        defaultValue={chosenInvoice.clientAddress.country}
        labelText="Country"
      />
    </FormContainer>
  );
};

export default BillToField;
