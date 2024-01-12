import { type FC } from 'react';

import Points from '../Points/Points';
import { Container } from './Board.styled';

const Board: FC = () => {
  return (
    <>
      <Container>
        <Points />
      </Container>
    </>
  );
};

export default Board;
