import { Tile } from "~/store/mapSlice";
import { Direction } from "../enums/global";
import { Tiles } from "../enums/tiles";

export const classicMap: Tile[] = [
  {
    type: Tiles.doubleCorner,
    direction: Direction.left,
    position: { x: 320, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 344, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 368, y: 110 },
  },
];
