import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './Instructions.styled';

const Instructions: FC = () => {
  return (
    <Container>
      <Link to="/how-to-play">How to play?</Link>
      <Link to="/about">About</Link>
    </Container>
  );
};

export default Instructions;
