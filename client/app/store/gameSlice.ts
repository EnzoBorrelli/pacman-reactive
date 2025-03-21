import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStates } from "~/components/enums/game";


export interface GameState {
  previousState: GameStates,
  state: GameStates,
  score:number,
  highScore:number,
  lives:number
}



const initialState: GameState = {
  previousState: GameStates.start,
  state: GameStates.start,
  score: 0,
  highScore:0,
  lives:3
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
  },
});

export const { setPreviousGameState,setGameState,setGameScore,setGameHighScore,setGameLives } = gameSlice.actions;
export default gameSlice.reducer;
