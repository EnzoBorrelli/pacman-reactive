import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Direction, objectSize } from "~/components/enums/global";
import { Maps } from "~/components/enums/maps";
import { Tiles } from "~/components/enums/tiles";
import { RootState } from ".";

export interface Tile {
  type: Tiles;
  position: { x: number; y: number };
  direction: Direction;
  flip?: boolean;
}

export interface Dots {
  layout: number[][];
}

interface MapState {
  tiles: Tile[];
  dotsLayout: Dots;
  tileSize: objectSize;
  mapSize: { x: number; y: number };
}

const initialState: MapState = {
  tiles: [
    {
      type: Tiles.doubleWall,
      position: { x: 0, y: 0 },
      direction: Direction.right,
    },
  ],
  dotsLayout: {
    layout: [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  tileSize: objectSize.classic,
  mapSize: Maps.classicMap,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapTiles: (state, action: PayloadAction<Tile[]>) => {
      state.tiles = action.payload;
    },
    setMapDots: (state, action: PayloadAction<Dots>) => {
      state.dotsLayout = action.payload;
    },
    removeDot: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;
      if (state.dotsLayout.layout[y] && state.dotsLayout.layout[y][x] !== 0) {
        state.dotsLayout.layout[y][x] = 0; // 0 means no dot
      }
    },
    addTile: (state, action: PayloadAction<Tile>) => {
      state.tiles.push(action.payload);
    },
    removeTile: (state, action: PayloadAction<number>) => {
      state.tiles.splice(action.payload, 1);
    },
    setTileSize: (state, action: PayloadAction<objectSize>) => {
      state.tileSize = action.payload;
    },
    setMapSize: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.mapSize = action.payload;
    },
  },
});

export const selectAllEatenDots = createSelector(
  [(state: RootState) => state.map.dotsLayout.layout],
  (layout) => layout.every((row) => row.every((cell) => cell === 0))
);

export const {
  setMapTiles,
  addTile,
  removeTile,
  setTileSize,
  setMapSize,
  setMapDots,
  removeDot,
} = mapSlice.actions;
export default mapSlice.reducer;
