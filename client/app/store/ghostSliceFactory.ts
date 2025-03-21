
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GhostState } from "~/components/enums/ghosts";
import { Direction, CharacterSize } from "~/components/enums/global";

// Factory function to create a slice for a ghost
const createGhostSlice = (ghostName: string) => {
  const initialState = {
    position: { x: 0, y: 0 },
    size: CharacterSize.small,
    direction: Direction.up,
    state: GhostState.idle,
  };

  return createSlice({
    name: ghostName,
    initialState,
    reducers: {
      setGhostState: (state, action: PayloadAction<GhostState>) => {
        state.state = action.payload;
      },
      setGhostPosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
        state.position = action.payload;
      },
      setGhostSize: (state, action: PayloadAction<CharacterSize>) => {
        state.size = action.payload;
      },
      setGhostDirection: (state, action: PayloadAction<Direction>) => {
        state.direction = action.payload;
      },
    },
  });
};

export default createGhostSlice;
