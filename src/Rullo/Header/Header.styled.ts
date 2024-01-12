import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const LogoContainer = styled.div`
  h1 {
    display: none;
  }

  img {
    width: 140px;
  }
`;

export const Level = styled.div`
  color: ${(props) => props.theme.levelColor};
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 2px;
`;
