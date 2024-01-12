import { type FC } from 'react';

import { useAppSelector } from '../../hooks';
import { Container, Level, LogoContainer } from './Header.styled';
import logoSvg from './assets/logo.svg';

const Header: FC = () => {
  const level = useAppSelector((state) => state.game.levels.find((l) => l.id === state.game.level));

  return (
    <Container>
      <LogoContainer>
        <img src={logoSvg} alt="Rulo" />
        <h1>Rullo</h1>
      </LogoContainer>

      {level && (
        <Level>
          {level.levelType} #{level.id}
        </Level>
      )}
    </Container>
  );
};

export default Header;
