import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    fontColor: string;
    highlightedColor: string;
    levelColor: string;
    linkColor: string;

    buttonColors: {
      background: string;
      font: string;
      backgroundHover: string;
      fontHover: string;
    };

    pawnColors: {
      border: string;
    };

    boardColors: {
      main: string;
      point: string;
      pointBorder: string;
    };

    ruleColors: {
      background: string;
    };

    figureColors: {
      [k: string]: string;

      p: string;
      b: string;
      y: string;
    };

    gameWidth: number;
    boardSize: number;
    ruleWidth: number;
  }
}
