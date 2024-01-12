import { type FC, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Outlet, useNavigate } from 'react-router-dom';

import { type Level, setLevels } from '../game';
import { useAppDispatch, useAppSelector } from '../hooks';
import Board from './Board';
import Header from './Header';
import Instructions from './Instructions';
import LevelUnlocked from './LevelUnlocked';
import Navigation from './Navigation';
import Pawns from './Pawns';
import Rules from './Rules';
import { Columns, Container, Left, Page, Right } from './Rullo.styled';
import IS_TOUCH_DEVICE from './helpers/isTouchDevice';

const Rullo: FC = () => {
  const dispatch = useAppDispatch();
  const unlockedLevel = useAppSelector((state) => state.game.done);
  const navigate = useNavigate();

  useEffect(() => {
    const getJson = async (): Promise<void> => {
      const response = await fetch('/levels.json');
      const data = await response.json();

      const levels = (
        Object.entries(data).reduce((acc: Array<Record<string, unknown>>, [k, v]) => {
          const localLevels = (v as Array<Record<string, unknown>>).map((level) => ({
            ...level,
            levelType: k
          }));

          return [...acc, ...localLevels];
        }, []) as Level[]
      ).sort((a, b) => a.id - b.id);

      dispatch(setLevels(levels));
    };

    getJson().catch((e) => {
      console.error(e);
    });
  }, [dispatch]);

  useEffect(() => {
    // navigate('/how-to-play');
  }, []);

  return (
    <>
      <Page>
        <Container>
          <Columns>
            <Left>
              <Header />

              <DndProvider backend={IS_TOUCH_DEVICE ? TouchBackend : HTML5Backend}>
                <Pawns />

                <Board />
              </DndProvider>
            </Left>
            <Right>
              <Rules />
            </Right>
          </Columns>

          <Navigation />

          <Instructions />
        </Container>
      </Page>

      {unlockedLevel && <LevelUnlocked />}

      <Outlet />
    </>
  );
};

export default Rullo;
