import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
    padding: 0;
    margin: 0;

    color-scheme: dark;
    color: ${(props) => props.theme.fontColor};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    
    overflow: hidden;
  }
  
  body, button {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 13px;
  }
`;

export default GlobalStyle;
