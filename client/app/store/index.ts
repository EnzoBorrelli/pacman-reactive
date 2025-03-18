import { configureStore } from "@reduxjs/toolkit";
import pacmanReducer from "./pacmanSlice";
import mapReducer from "./mapSlice";
import sceneReducer from "./sceneSlice";
import gameReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    pacman: pacmanReducer,
    map: mapReducer,
    scene: sceneReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
