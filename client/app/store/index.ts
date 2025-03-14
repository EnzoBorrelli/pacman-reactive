import { configureStore } from "@reduxjs/toolkit";
import pacmanReducer from "./pacmanSlice";
import mapReducer from "./mapSlice";

export const store = configureStore({
  reducer: {
    pacman: pacmanReducer,
    map: mapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
