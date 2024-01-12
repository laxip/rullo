import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import verify from './verify';

const initialBoard = ['', '', '', '', '', '', '', '', ''];

export interface Level {
  id: number;
  levelType: string;
  result: string[];
  rules: string[][][];
}

interface GameState {
  board: string[];
  level: number;
  levels: Level[];
  done: boolean;
  bestLevel: number;
}

const bestLevel = parseInt(localStorage.getItem('best-level') ?? '') || 0;

const HOW_MANY_LEVELS = 40;

// Define the initial state using that type
const initialState: GameState = {
  board: initialBoard,
  level: Math.min(bestLevel + 1, HOW_MANY_LEVELS),
  levels: [],
  done: false,
  bestLevel
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addToBoard: (state, action: PayloadAction<{ index: number; value: string }>) => {
      const index = state.board.indexOf(action.payload.value);

      if (index >= 0) {
        state.board[index] = '';
      }

      state.board[action.payload.index] = action.payload.value;

      const count = state.board.filter((item) => Boolean(item)).length;

      if (count === 9) {
        if (verify(state.board, state.levels.find((l) => l.id === state.level)?.result)) {
          if (state.level <= state.bestLevel) {
            state.level += 1;
            state.board = initialBoard;
          } else {
            state.done = true;
          }
        }
      }
    },
    removeFromBoard: (state, action: PayloadAction<string>) => {
      const index = state.board.indexOf(action.payload);

      if (index >= 0) {
        state.board[index] = '';
      }
    },
    setLevels: (state, action: PayloadAction<Level[]>) => {
      state.levels = action.payload;
    },
    goToNextLevel: (state) => {
      if (state.level <= Math.min(state.bestLevel, state.levels.length - 1)) {
        state.board = initialBoard;
        state.level += 1;
      }
    },
    goToPreviousLevel: (state) => {
      if (state.level > 1) {
        state.level -= 1;
        state.board = initialBoard;
      }
    },
    unlock: (state) => {
      state.bestLevel = Math.max(state.bestLevel, state.level);
      state.level += 1;
      state.board = initialBoard;
      state.done = false;

      localStorage.setItem('best-level', state.bestLevel.toString());
    },
    reset: (state) => {
      state.board = initialBoard;
    },
    finish: (state) => {
      state.board = initialBoard;
      state.bestLevel = Math.max(state.bestLevel, state.levels.length);
      state.level = 1;
      state.done = false;

      localStorage.setItem('best-level', state.bestLevel.toString());
    }
  }
});

export const { addToBoard, setLevels, goToNextLevel, goToPreviousLevel, unlock, reset, finish, removeFromBoard } = gameSlice.actions;

export default gameSlice.reducer;
