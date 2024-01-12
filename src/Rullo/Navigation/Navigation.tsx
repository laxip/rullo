import { type FC } from 'react';

import { goToNextLevel, goToPreviousLevel, reset } from '../../game';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Best, Button, Container } from './Navigation.styled';

const Navigation: FC = () => {
  const numberOfLevels = useAppSelector((state) => state.game.levels.length);
  const bestLevel = useAppSelector((state) => state.game.bestLevel);
  const currentLevel = useAppSelector((state) => state.game.level);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Best>
        Best: <span>{bestLevel < 1 ? '-' : bestLevel}</span>/{numberOfLevels}
      </Best>

      <div>
        <Button
          onClick={() => {
            dispatch(goToPreviousLevel());
          }}
          disabled={currentLevel < 2}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            dispatch(goToNextLevel());
          }}
          disabled={bestLevel - currentLevel < 0 || currentLevel >= numberOfLevels}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Navigation;
