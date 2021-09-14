import { ButtonContainer, EditButton, DeleteButton, PaidButton } from './EditDeletePaidButtons.css';
const EditDeletePaidFunctions = () => {
  return (
    <ButtonContainer>
      <EditButton>Edit</EditButton>
      <DeleteButton>Delete</DeleteButton>
      <PaidButton>Mark As Paid</PaidButton>
    </ButtonContainer>
  );
};

export default EditDeletePaidFunctions;
