import { type DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  backgroundColor: '#333',
  fontColor: '#121212',
  highlightedColor: '#ffbd26',
  levelColor: '#616161',
  linkColor: '#e6e6e6',

  buttonColors: {
    background: '#272727',
    font: '#a8a8a8',
    backgroundHover: '#ffbd26',
    fontHover: '#121212'
  },

  pawnColors: {
    border: '#5b5b5b'
  },

  boardColors: {
    main: '#e6e6e6',
    point: '#f3f3f3',
    pointBorder: '#ededed'
  },

  ruleColors: {
    background: '#3b3b3b'
  },

  figureColors: {
    p: '#939393',
    b: '#121212',
    y: '#ffbd26'
  },

  gameWidth: 346,
  boardSize: 287,
  ruleWidth: 48
};

export default theme;
