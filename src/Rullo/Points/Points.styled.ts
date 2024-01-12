import styled, { css } from 'styled-components';

import { blink } from '../../theme/animations';

export const Point = styled.div<{
  $active?: boolean;
}>`
  border-radius: 100px;
  background: ${(props) => props.theme.boardColors.point};
  position: relative;
  overflow: hidden;
  transition: all 0.2s;
  border: 1px solid ${(props) => props.theme.boardColors.pointBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 5px 10px 10px #00000014;

  ${(props) =>
    props.$active &&
    css`
      box-shadow:
        inset 5px 10px 10px #00000014,
        inset 0 0 28px #0000002e;

      img {
        opacity: 0.1;
      }
    `}

  img {
    width: 40px;
    animation: ${blink} 200ms 1;
    transition: all 200ms;
    pointer-events: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  box-sizing: border-box;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const IconDragWrapper = styled.div<{
  $isDragging?: boolean;
}>`
  ${(props) =>
    props.$isDragging &&
    css`
      opacity: 0.1;
    `}
`;
