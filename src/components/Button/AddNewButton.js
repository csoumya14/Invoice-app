import {
  ButtonElement,
  ButtonContainer,
  CircleAroundButton,
  TextElement,
} from './AddNewButton.css';

const AddNew = ({ children, onClick }) => (
  <ButtonContainer>
    <CircleAroundButton>
      <ButtonElement onClick={onClick}>{children}</ButtonElement>
    </CircleAroundButton>
    <TextElement>New</TextElement>
  </ButtonContainer>
);

export default AddNew;
