import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Direction, objectSize } from "~/components/enums/global";
import { Tiles } from "~/components/enums/tiles";

export interface Tile {
  type:Tiles
  position: { x: number; y: number };
  direction: Direction;
  flip?: boolean;
}

interface MapState{
  tiles: Tile[];
  size: objectSize;
}

const initialState: MapState = {
  tiles:[{
    type:Tiles.doubleWall,
    position:{x:0,y:0},
    direction:Direction.right
  }],
  size: objectSize.classic
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapTiles: (state, action: PayloadAction<Tile[]>) => {
      state.tiles = action.payload;
    },
    addTile: (state, action: PayloadAction<Tile>) => {
      state.tiles.push(action.payload);
    },
    removeTile: (state, action: PayloadAction<number>) => {
      state.tiles.splice(action.payload, 1);
    },
    setTileSize: (state, action: PayloadAction<objectSize>) => {
      state.size = action.payload;
    },
  },
});

export const { setMapTiles, addTile, removeTile, setTileSize } = mapSlice.actions;
export default mapSlice.reducer;
