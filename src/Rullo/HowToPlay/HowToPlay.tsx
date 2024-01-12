import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Drag, Fit, Inner, Play } from './HowToPlay.styled';
import arrowUrl from './assets/arrow.svg';

const HowToPlay: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Inner>
        <Drag>
          <img src={arrowUrl} alt="Drag items" />

          <span>
            Drag these items
            <br />
            onto the board
          </span>
        </Drag>

        <Fit>
          <img src={arrowUrl} alt="Fit rules" />

          <span>
            Items on the board
            <br />
            should fit all rules
          </span>
        </Fit>

        <Play
          onClick={() => {
            navigate(-1);
          }}
        >
          Play
        </Play>
      </Inner>
    </Container>
  );
};

export default HowToPlay;
