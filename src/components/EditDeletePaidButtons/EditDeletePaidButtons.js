import { ButtonContainer, EditButton, DeleteButton, PaidButton } from './EditDeletePaidButtons.css';
const EditDeletePaidFunctions = ({ handleClick }) => {
  return (
    <ButtonContainer>
      <EditButton onClick={() => handleClick()}>Edit</EditButton>
      <DeleteButton>Delete</DeleteButton>
      <PaidButton>Mark As Paid</PaidButton>
    </ButtonContainer>
  );
};

export default EditDeletePaidFunctions;
