import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100vw;

  top: 72px;
  left: -400px;
  left: ${({ viewEditForm }) => (viewEditForm ? '0px' : '-400px')};
  overflow: hidden;
  background-color: white;
  box-shadow: 5px 5px 10px grey;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  z-index: 11;
  opacity: ${({ viewEditForm }) => (viewEditForm ? '1' : '0')};
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
`;

export const Heading1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  letter-spacing: -0.5px;

  color: #0c0e16;
`;

export const Form = styled.form``;
