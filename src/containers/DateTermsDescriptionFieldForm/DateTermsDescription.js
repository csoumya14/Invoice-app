import LongSizeInput from '../../components/Input/LongSizeInput/LongSizeInput';
import DateInput from '../../components/Input/DateInput/DateInput';
import TermInputList from '../../components/Input/TermListInput/TermListInput';
import { FormContainer } from './DateTermsDescription.css';

const BillToField = ({ chosenInvoice }) => {
  return (
    <FormContainer>
      <DateInput
        type="date"
        nameId="invoiceDate"
        minLength="2000-01-01"
        maxLength="2038-01-01"
        defaultValue={chosenInvoice.createdAt}
        labelText="Invoice Date"
      />
      <TermInputList />
      <LongSizeInput
        type="text"
        nameId="streetAddress"
        minLength="10"
        maxLength="18"
        defaultValue={chosenInvoice.clientAddress.street}
        labelText="Graphic Design"
      />
    </FormContainer>
  );
};

export default BillToField;
