import { type FC, type NamedExoticComponent, memo } from 'react';
import { type ConnectDropTarget, DragPreviewImage, useDrag, useDrop } from 'react-dnd';

import { removeFromBoard } from '../../game';
import { useAppDispatch, useAppSelector } from '../../hooks';
import pawns from '../pawnsList';
import { Container, Pawn } from './Pawns.styled';

interface DragElementProps {
  name: string;
  type: string;
  icon: string;
}

interface PawnProps {
  isActive?: boolean;
  innerRef: ConnectDropTarget;
}

export const DragElement: NamedExoticComponent<DragElementProps> = memo(function DragElement({ name, icon, type }) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [name, type]
  );

  return (
    <>
      <DragPreviewImage key={Date.now()} connect={preview} src={icon} />

      <Pawn ref={drag} $isDragging={isDragging}>
        <img src={icon} alt={name} />
      </Pawn>
    </>
  );
});

const Pawns: FC<PawnProps> = ({ isActive, innerRef }) => {
  const board = useAppSelector((state) => state.game.board);

  return (
    <Container $isActive={isActive} ref={innerRef}>
      {pawns.map((p) => {
        if (board.includes(p.key)) {
          return (
            <Pawn key={p.key} $disabled={true}>
              <img src={p.icon} alt={p.key} />
            </Pawn>
          );
        } else {
          return <DragElement key={p.key} name={p.key} icon={p.icon} type="pawn" />;
        }
      })}
    </Container>
  );
};

export const DropElement: NamedExoticComponent = memo(function DropElement() {
  const dispatch = useAppDispatch();

  const onDrop = (item: any): void => {
    dispatch(removeFromBoard(item.name));
  };

  const [{ canDrop }, drop] = useDrop({
    accept: ['used-pawn'],
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return <Pawns isActive={canDrop} innerRef={drop} />;
});

export default DropElement;
