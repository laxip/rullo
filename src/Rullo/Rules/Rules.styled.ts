import styled, { css } from 'styled-components';

export const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;

export const RuleContainer = styled.div`
  position: relative;
  padding: 5px 0;
  width: ${(props) => props.theme.ruleWidth}px;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
  }

  &:before {
    top: 0;
    background: hsla(0, 0%, 100%, 0.08);
  }

  &:first-child:before,
  &:last-child:after {
    display: none;
  }
`;

export const CellContainer = styled.div<{
  $isEmpty?: boolean;
  $isColored?: boolean;
  $colorKey?: string;
}>`
  width: 15px;
  height: 15px;
  margin-right: 1px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  ${(props) =>
    !props.$isEmpty &&
    css`
      background: ${props.theme.ruleColors.background};
    `}

  ${(props) =>
    props.$isColored &&
    props.$colorKey &&
    css`
      background: ${props.theme.figureColors[props.$colorKey]};
    `}
  
  img {
    width: 7px;
  }
`;
