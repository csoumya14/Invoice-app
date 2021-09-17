import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
`;

export const DummyUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 75px;
`;

export const Dummyl = styled.li`
  text-align: center;
  text-transform: uppercase;
  height: 70px;
  line-height: 70px;
  margin: 15px 0;
  color: white;
  cursor: pointer;
  background-color: #00936e;
  font-size: 1em;
  letter-spacing: 0.2em;
  transition: all 0.25s;
`;

export const Menu = styled.div`
  width: 400px;
  height: 100%;
  top: 0;
  left: -400px;
  left: ${({ viewEditForm }) => (viewEditForm ? '0px' : '-400px')};
  overflow: hidden;
  background-color: white;
  box-shadow: 5px 5px 10px grey;
  position: absolute;
  z-index: 11;
  opacity: ${({ viewEditForm }) => (viewEditForm ? '1' : '0')};
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
`;
