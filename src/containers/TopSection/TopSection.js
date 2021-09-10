import {
  Wrapper,
  LogoBackgroundUpper,
  LogoBackgroundLower,
  VerticalLine,
  ButtonAvatarDiv,
  AvatarImage,
  DefaultImage,
} from './TopSection.css';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button/ThemeChangeButton';

import VisuallyHidden from '../../components/ForAccessiblity/SpanElement';
import avatarImg from '../../assets/image-avatar.jpg';
const TopSection = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <LogoBackgroundUpper>
        <DefaultImage src={logo} alt="logo" />
        <LogoBackgroundLower></LogoBackgroundLower>
      </LogoBackgroundUpper>
      <ButtonAvatarDiv>
        <Button onClick={toggleTheme}>
          <VisuallyHidden>Click button to toggle theme</VisuallyHidden>
        </Button>
        <VerticalLine></VerticalLine>
        <AvatarImage src={avatarImg} alt="avatar" />
      </ButtonAvatarDiv>
    </Wrapper>
  );
};

export default TopSection;

/*
<StyledImage imageSrc={logo} imageAlt="logo" />

*/
