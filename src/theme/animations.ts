import { keyframes } from 'styled-components';

export const showUpFromBottom = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const blink = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  
  70% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const jump = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;

  }
  

  20% {
    transform: scale(1) ;
    opacity: 1;

  }

  50% {
    transform: scale(1) ;
    opacity: 0;

  }

  100% {
    transform: scale(0) ;
    opacity: 0;

  }
`;
