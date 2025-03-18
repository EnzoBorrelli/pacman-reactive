import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStates } from "~/components/enums/game";


export interface GameState {
  state: GameStates,
  score:number,
  highScore:number,
}



const initialState: GameState = {
  state: GameStates.start,
  score: 0,
  highScore:0
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<GameStates>) => {
      state.state = action.payload;
    },
    setGameScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setGameHighScore: (state, action: PayloadAction<number>) => {
      state.highScore = action.payload;
    },
  },
});

export const { setGameState,setGameScore,setGameHighScore } = gameSlice.actions;
export default gameSlice.reducer;
