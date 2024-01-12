import { transparentize } from 'polished';
import styled from 'styled-components';

import { jump, showUpFromBottom } from '../../theme/animations';
import bgUrl from './assets/congrats.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => transparentize(0.2, props.theme.backgroundColor)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  animation: ${showUpFromBottom} 200ms 1;
`;

export const Inner = styled.div`
  width: 300px;
  height: 250px;
  padding-top: 160px;
  position: relative;
`;

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${bgUrl});
  background-repeat: no-repeat;
  background-position: top center;
  pointer-events: none;
  animation: ${jump} 1400ms infinite;
`;

export const Header = styled.h2`
  font-size: 1.5rem;
`;

export const Desc = styled.div`
  margin-bottom: 50px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.buttonColors.backgroundHover};
  color: ${(props) => props.theme.buttonColors.fontHover};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 2rem;
  padding-top: 0.75rem;
  border-radius: 100px;
  cursor: pointer;
`;
