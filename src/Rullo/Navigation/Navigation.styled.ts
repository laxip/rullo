import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Best = styled.div`
  font-size: 1.4em;
  color: ${(props) => props.theme.levelColor};

  span {
    color: ${(props) => props.theme.highlightedColor};
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  background: ${(props) => props.theme.buttonColors.background};
  padding: 0.5rem 0.625rem;
  border-radius: 100px;
  margin-left: 3px;
  color: ${(props) => props.theme.buttonColors.font};
  border: none;
  font-size: 0.875em;
  transition: all 0.2s;

  &:not(&:disabled) {
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.buttonColors.backgroundHover};
      color: ${(props) => props.theme.buttonColors.fontHover};
    }
  }

  &:disabled {
    opacity: 0.4;
  }
`;
