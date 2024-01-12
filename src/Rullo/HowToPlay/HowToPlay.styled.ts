import { transparentize } from 'polished';
import styled from 'styled-components';

import { showUpFromBottom } from '../../theme/animations';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: ${(props) => transparentize(0.2, props.theme.backgroundColor)};
  position: fixed;
  top: 0;
  left: 0;
  animation: ${showUpFromBottom} 300ms 1;
`;

export const Inner = styled.div`
  width: 340px;
  height: 310px;
  position: relative;
`;

export const Drag = styled.div`
  position: absolute;
  top: 30px;
  left: 0;

  img {
    width: 60px;
    transform: scaleX(-1) rotate(288deg);
    display: block;
  }

  span {
    display: block;
    color: white;
    margin-top: 10px;
    margin-left: 20px;
    line-height: 1.25rem;
  }
`;

export const Fit = styled.div`
  position: absolute;
  top: 80px;
  right: 60px;
  display: flex;
  flex-direction: column;
  align-items: end;

  img {
    width: 60px;
    transform: scaleX(-1) rotate(237deg);
    display: block;
  }

  span {
    display: block;
    color: white;
    margin-top: 10px;
    line-height: 1.25rem;
    text-align: right;
    margin-right: 30px;
  }
`;

export const Play = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  background: ${(props) => props.theme.buttonColors.backgroundHover};
  color: ${(props) => props.theme.buttonColors.fontHover};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 2rem;
  padding-top: 0.75rem;
  border-radius: 100px;
  transform: translateX(-50%);
  cursor: pointer;
`;
