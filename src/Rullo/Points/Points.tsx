import { type FC, memo, useMemo } from 'react';
import { DragPreviewImage, useDrag, useDrop } from 'react-dnd';

import { addToBoard } from '../../game';
import { useAppDispatch, useAppSelector } from '../../hooks';
import pawnsList from '../pawnsList';
import { Container, IconDragWrapper, Point } from './Points.styled';

const points = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const DragElement = memo(function DragElement({ name, icon }: any) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'used-pawn',
      item: { name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [name]
  );

  return (
    <>
      <DragPreviewImage key={Date.now()} connect={preview} src={icon} />

      <IconDragWrapper ref={drag} $isDragging={isDragging}>
        <img src={icon} alt={name} />
      </IconDragWrapper>
    </>
  );
});

export const DropElement = memo(function DropElement({ onDrop, value }: any) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ['pawn', 'used-pawn'],
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = isOver && canDrop;

  const iconItem = useMemo(() => {
    if (value) {
      return pawnsList.find((pawn) => pawn.key === value);
    }

    return undefined;
  }, [value]);

  return (
    <Point ref={drop} $active={isActive}>
      {iconItem && <DragElement icon={iconItem.icon} name={value} />}
    </Point>
  );
});

const Points: FC = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.game.board);

  return (
    <Container>
      {points.map((index) => (
        <DropElement
          onDrop={(item: { name: string }) => {
            dispatch(
              addToBoard({
                index,
                value: item.name
              })
            );
          }}
          key={index}
          value={board[index]}
        />
      ))}
    </Container>
  );
};

export default Points;
