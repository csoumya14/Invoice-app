import { ButtonElement } from './GoBackButton.css';

const Button = ({ children, onClick }) => (
  <ButtonElement onClick={onClick}>{children}</ButtonElement>
);

export default Button;
