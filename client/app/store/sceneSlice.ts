import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Scenes } from "~/components/enums/scene";


export interface SceneState {
  scene: Scenes
}



const initialState: SceneState = {
  scene: Scenes.mainMenu
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setScene: (state, action: PayloadAction<Scenes>) => {
      state.scene = action.payload;
      console.log(`scene set to: ${action.payload}`);
    },
  },
});

export const { setScene } = sceneSlice.actions;
export default sceneSlice.reducer;
