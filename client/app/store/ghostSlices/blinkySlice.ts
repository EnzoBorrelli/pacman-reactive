import createGhostSlice from "../ghostSliceFactory";


const blinkySlice = createGhostSlice("blinky");

export const { setGhostState, setGhostPosition, setGhostSize, setGhostDirection } = blinkySlice.actions;
export default blinkySlice.reducer;
