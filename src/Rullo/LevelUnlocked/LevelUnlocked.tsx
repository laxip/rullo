import { type FC } from 'react';

import { finish, unlock } from '../../game';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Container, Desc, Header, Image, Inner } from './LevelUnlocked.styled';

const LevelUnlocked: FC = () => {
  const currentLevel = useAppSelector((state) => state.game.level);
  const numberOfLevels = useAppSelector((state) => state.game.levels.length);
  const dispatch = useAppDispatch();

  const noFinish = currentLevel < numberOfLevels;

  return (
    <Container>
      <Inner>
        <Image></Image>

        <Header>{noFinish ? 'Level unlocked' : 'Congratulations'}!</Header>
        <Desc>{noFinish ? `You have unlocked level no. ${currentLevel + 1}` : 'You won the game!'}</Desc>
        <Button
          onClick={() => {
            if (noFinish) {
              dispatch(unlock());
            } else {
              dispatch(finish());
            }
          }}
        >
          Play{noFinish ? '' : ' again'}
        </Button>
      </Inner>
    </Container>
  );
};

export default LevelUnlocked;
