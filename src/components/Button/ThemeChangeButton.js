import { ButtonElement } from './ThemeChangeButton.css';

const Button = ({ children, onClick }) => (
  <ButtonElement onClick={onClick}>{children}</ButtonElement>
);

export default Button;
