import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStates } from "~/components/enums/game";


export interface GameState {
  state: GameStates
}



const initialState: GameState = {
  state: GameStates.start
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<GameStates>) => {
      state.state = action.payload;
    },
  },
});

export const { setGameState } = gameSlice.actions;
export default gameSlice.reducer;
