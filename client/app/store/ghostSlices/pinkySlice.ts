import createGhostSlice from "../ghostSliceFactory";


const pinkySlice = createGhostSlice("pinky");

export const { setGhostState, setGhostPosition, setGhostSize, setGhostDirection } = pinkySlice.actions;
export default pinkySlice.reducer;
