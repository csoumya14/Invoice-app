import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 4.5rem;
  background-color: #373b53;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoBackgroundUpper = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  background-color: #7c5dfa;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
`;
export const LogoBackgroundLower = styled.div`
  margin-top: 35.6px;
  width: 72px;
  height: 36.35px;
  position: absolute;
  background-color: #9277ff;
  border-top-left-radius: 26px;
  border-bottom-right-radius: 26px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  background-color: #494e6e;
  height: 100%;
  float: left;
`;

export const ButtonAvatarDiv = styled.div`
  width: 50vw;
  height: 100%;
  margin-left: 60vw;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const baseImageStyles = css`
  margin-left: 20px;
  margin-top: 1.5rem;
  border-radius: 26px;
  z-index: 1;
  position: absolute;
`;

export const DefaultImage = styled.img`
  ${baseImageStyles}
  border:${p => p.border};
`;

export const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

/*
background-image: url(${backgroundPattern});
*/
