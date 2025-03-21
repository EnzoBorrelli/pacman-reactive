import { configureStore } from "@reduxjs/toolkit";
import pacmanReducer from "./pacmanSlice";
import blinkyReducer from "./ghostSlices/blinkySlice";
import inkyReducer from "./ghostSlices/inkySlice";
import pinkyReducer from "./ghostSlices/pinkySlice";
import clydeReducer from "./ghostSlices/clydeSlice";
import mapReducer from "./mapSlice";
import sceneReducer from "./sceneSlice";
import gameReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    pacman: pacmanReducer,
    blinky: blinkyReducer,
    inky: inkyReducer,
    pinky: pinkyReducer,
    clyde: clydeReducer,
    map: mapReducer,
    scene: sceneReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
