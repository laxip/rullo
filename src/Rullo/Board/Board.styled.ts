import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => props.theme.boardSize}px;
  height: ${(props) => props.theme.boardSize}px;
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) => props.theme.boardColors.main};
`;
