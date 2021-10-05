import { Wrapper, Heading1, Form } from './EditForm.css';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import GoBack from '../../components/Button/GoBackButton';
import BillFrom from '../BillFromFieldForm/BillFrom';
import BillTo from '../BillToFieldForm/BillToFileldForm';
const EditForm = ({ viewEditForm, handleClick, chosenInvoice }) => {
  return (
    <Wrapper viewEditForm={viewEditForm}>
      <GoBack onClick={() => handleClick()}>
        <img type="image" tabIndex="0" src={arrowLeft} alt="arrow-left" />
        Go back
      </GoBack>
      <Heading1>
        Edit{' '}
        <span>
          <span>#</span>
          {chosenInvoice.id}
        </span>
      </Heading1>
      <Form>
        <BillFrom chosenInvoice={chosenInvoice} />
        <BillTo chosenInvoice={chosenInvoice} />
      </Form>
    </Wrapper>
  );
};

export default EditForm;
