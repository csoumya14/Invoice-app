import styled, { css } from 'styled-components';

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
