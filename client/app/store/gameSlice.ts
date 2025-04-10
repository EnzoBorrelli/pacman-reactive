import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStates } from "~/components/enums/game";

export interface GameState {
  previousState: GameStates;
  state: GameStates;
  score: number;
  highScore: number;
  lives: number;
  dotsEaten: number;
  level: number;
}

const initialState: GameState = {
  previousState: GameStates.start,
  state: GameStates.start,
  score: 0,
  highScore: 0,
  lives: 3,
  dotsEaten: 0,
  level: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPreviousGameState: (state, action: PayloadAction<GameStates>) => {
      state.previousState = action.payload;
    },
    setGameState: (state, action: PayloadAction<GameStates>) => {
      state.state = action.payload;
    },
    setGameScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setGameHighScore: (state, action: PayloadAction<number>) => {
      state.highScore = action.payload;
    },
    setGameLives: (state, action: PayloadAction<number>) => {
      state.lives = action.payload;
    },
    setGameDotsEaten: (state, action: PayloadAction<number>) => {
      state.dotsEaten = action.payload;
    },
    setGameLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
  },
});

export const {
  setPreviousGameState,
  setGameState,
  setGameScore,
  setGameHighScore,
  setGameLives,
  setGameDotsEaten,
  setGameLevel,
} = gameSlice.actions;
export default gameSlice.reducer;
