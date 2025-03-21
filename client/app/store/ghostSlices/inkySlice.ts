import createGhostSlice from "../ghostSliceFactory";


const inkySlice = createGhostSlice("inky");

export const { setGhostState, setGhostPosition, setGhostSize, setGhostDirection } = inkySlice.actions;
export default inkySlice.reducer;
