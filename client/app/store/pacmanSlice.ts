import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Direction, CharacterSize } from "~/components/enums/global";
import { PacState } from "~/components/enums/pacman";

interface PacmanState {
  state: PacState;
  position: { x: number; y: number };
  size: CharacterSize;
  direction: Direction;
}

const initialState: PacmanState = {
  state: PacState.idle,
  position: { x: 100, y: 100 },
  size: CharacterSize.classic,
  direction: Direction.right,
};

const pacmanSlice = createSlice({
  name: "pacman",
  initialState,
  reducers: {
    setPacmanState: (state, action: PayloadAction<PacState>) => {
      state.state = action.payload;
    },
    setPacmanPosition: (
      state,
      action: PayloadAction<{ x: number; y: number }>
    ) => {
      state.position = action.payload;
    },
    setPacmanSize: (state, action: PayloadAction<CharacterSize>) => {
      state.size = action.payload;
    },
    setPacmanDirection: (state, action: PayloadAction<Direction>) => {
      state.direction = action.payload;
    },
  },
});

export const {setPacmanState, setPacmanPosition, setPacmanSize, setPacmanDirection} = pacmanSlice.actions;
export default pacmanSlice.reducer;
