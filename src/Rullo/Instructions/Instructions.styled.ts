import styled from 'styled-components';

export const Container = styled.div`
  text-align: left;

  a {
    text-transform: uppercase;
    color: ${(props) => props.theme.linkColor};
    font-size: 0.625rem;
    margin-right: 10px;
    text-decoration: none;
  }
`;
