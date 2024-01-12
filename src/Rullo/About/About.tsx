import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Close, Container, Idea, Inner, Top } from './About.styled';

const About: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Inner>
        <Top>
          <p>This is open source code</p>
          <p>written by laxip</p>

          <a href="http://github.com/laxip/rullo">view on github.com</a>
        </Top>

        <Idea>Idea from Thinkfun&#39;s Chocolate Fix</Idea>
      </Inner>

      <Close
        onClick={() => {
          navigate(-1);
        }}
      ></Close>
    </Container>
  );
};

export default About;
