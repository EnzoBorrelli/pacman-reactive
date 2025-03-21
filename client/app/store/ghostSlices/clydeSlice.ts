import createGhostSlice from "../ghostSliceFactory";


const clydeSlice = createGhostSlice("clyde");

export const { setGhostState, setGhostPosition, setGhostSize, setGhostDirection } = clydeSlice.actions;
export default clydeSlice.reducer;
