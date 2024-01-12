import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div<{
  $isActive?: boolean;
}>`
  display: flex;
  flex-wrap: nowrap;
  border: 1px dashed ${(props) => (props.$isActive ? props.theme.pawnColors.border : 'transparent')};
  border-radius: 6px;
  padding: 3px;
  margin-bottom: 5px;
  transition: all 200ms;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const Pawn = styled.div<{
  $isDragging?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  height: 31px;
  width: 31px;
  margin: 0;
  transition: all 0.2s;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    pointer-events: none;
  }

  ${(props) =>
    props.$isDragging &&
    css`
      opacity: 0.2;
      transform: scale(0.6);
    `}

  ${(props) =>
    props.$disabled
      ? css`
          opacity: 0.3;
          transform: scale(0.6);
        `
      : css`
          animation: ${showup} 200ms 1;
        `}
`;

const showup = keyframes`
  0% {
    opacity: 0.3;
    transform: scale(0.6);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
