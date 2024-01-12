import { type FC } from 'react';

import { useAppSelector } from '../../hooks';
import { CellContainer, Column, Row, RuleContainer } from './Rules.styled';
import icons from './icons';

type RuleType = string[][];

interface RuleProps {
  rule: RuleType;
}

interface CellProps {
  value: string;
}

const Cell: FC<CellProps> = ({ value }) => {
  return (
    <CellContainer $isEmpty={value.length < 1} $isColored={value.length === 2 && value[0] === 'x'} $colorKey={value[1]}>
      {icons[value] && <img src={icons[value]} alt={value} />}
    </CellContainer>
  );
};

const Rule: FC<RuleProps> = ({ rule }) => {
  return (
    <RuleContainer>
      {rule.map((line, indexRow) => {
        return (
          <Row key={indexRow}>
            {line.map((cell, indexCell) => {
              return <Cell key={indexCell} value={cell} />;
            })}
          </Row>
        );
      })}
    </RuleContainer>
  );
};

const Rules: FC = () => {
  const level = useAppSelector((state) => state.game.levels.find((l) => l.id === state.game.level));

  return <Column>{level?.rules.map((rule, index) => <Rule key={index} rule={rule} />)}</Column>;
};

export default Rules;
