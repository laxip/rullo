import styled from 'styled-components';

import { showUpFromBottom } from '../../theme/animations';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.highlightedColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  animation: ${showUpFromBottom} 300ms 1;

  a {
    color: ${(props) => props.theme.linkColor};
  }
`;

export const Idea = styled.p`
  font-size: 0.625rem;
  opacity: 0.2;
`;

export const Inner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  margin-top: 100px;
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 31px;
  height: 31px;
  background: none;
  border: none;
  cursor: pointer;

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.fontColor};
    height: 1px;
  }

  &:after {
    transform: rotate(45deg);
  }

  &:before {
    transform: rotate(-45deg);
  }
`;
