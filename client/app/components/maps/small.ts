import { Tile } from "~/store/mapSlice";
import { Direction } from "../enums/global";
import { Tiles } from "../enums/tiles";

export const smallMap: Tile[] = [
  //**first row
  {
    type: Tiles.doubleCorner,
    direction: Direction.left,
    position: { x: 0, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 24, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 48, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 72, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 96, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 120, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 144, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 168, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 192, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 216, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 240, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 264, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 288, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 312, y: 0 },
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.up,
    position: { x: 336, y: 0 },
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.down,
    position: { x: 360, y: 0 },
    flip: true,
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 384, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 408, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 432, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 456, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 480, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 504, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 528, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 552, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 576, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 600, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 624, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 648, y: 0 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 672, y: 0 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.up,
    position: { x: 696, y: 0 },
  },
  //**second row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 24 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 336, y: 24 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 360, y: 24 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 24 },
  },
  //**third row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 48, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 72, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 96, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 120, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 144, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 192, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 216, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 240, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 264, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 288, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 336, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 360, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 408, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 432, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 456, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 480, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 504, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 552, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 576, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 600, y: 48 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 624, y: 48 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 648, y: 48 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 48 },
  },
  //**fourth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 48, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 144, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 192, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 288, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 336, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 360, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 408, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 504, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 552, y: 72 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 648, y: 72 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 72 },
  },
  //**fifth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 96 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 48, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 72, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 96, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 120, y: 96 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 144, y: 96 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 192, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 216, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 240, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 264, y: 96 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 288, y: 96 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.down,
    position: { x: 336, y: 96 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 360, y: 96 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 408, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 432, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 456, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 480, y: 96 },
  },

  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 504, y: 96 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 552, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 576, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 600, y: 96 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 624, y: 96 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 648, y: 96 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 96 },
  },
  //** sixth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 120 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 120 },
  },
  //** seven row
  {
    type: Tiles.doubleCorner,
    direction: Direction.down,
    position: { x: 0, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 24, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 48, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 72, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 96, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 120, y: 144 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.up,
    position: { x: 144, y: 144 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 192, y: 144 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 216, y: 144 },
    flip: true,
  },
  {
    type: Tiles.rectangle,
    direction: Direction.left,
    position: { x: 264, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 288, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 312, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 336, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 360, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 384, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 408, y: 144 },
  },
  {
    type: Tiles.rectangle,
    direction: Direction.left,
    position: { x: 432, y: 144 },
    flip: true,
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 480, y: 144 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 504, y: 144 },
    flip: true,
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 552, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 576, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 600, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 624, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 648, y: 144 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 672, y: 144 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.right,
    position: { x: 696, y: 144 },
  },
  //** seventh row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 144, y: 168 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 192, y: 168 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 216, y: 168 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 480, y: 168 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 504, y: 168 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 552, y: 168 },
  },
  //** ninth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 144, y: 192 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 192, y: 192 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 216, y: 192 },
  },
  {
    type: Tiles.squareCorner,
    direction: Direction.left,
    position: { x: 264, y: 192 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 288, y: 192 },
  },
  {
    type: Tiles.rectangle,
    direction: Direction.left,
    position: { x: 312, y: 192 },
    flip: true,
  },
  {
    type: Tiles.rectangle,
    direction: Direction.left,
    position: { x: 384, y: 192 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 408, y: 192 },
  },
  {
    type: Tiles.squareCorner,
    direction: Direction.up,
    position: { x: 432, y: 192 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 480, y: 192 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 504, y: 192 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 552, y: 192 },
  },
  //** tenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 0, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 24, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 48, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 72, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 96, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 120, y: 216 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 144, y: 216 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 192, y: 216 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 216, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 264, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 432, y: 216 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 480, y: 216 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 504, y: 216 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.down,
    position: { x: 552, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 576, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 600, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 624, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 648, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 672, y: 216 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 696, y: 216 },
  },
  //** eleventh row
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 264, y: 240 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 192, y: 240 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 216, y: 240 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 432, y: 240 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 480, y: 240 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 504, y: 240 },
  },
  //** twelfth row
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 0, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 24, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 48, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 72, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 96, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 120, y: 264 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.up,
    position: { x: 144, y: 264 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 192, y: 264 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 216, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 264, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 432, y: 264 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 480, y: 264 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 504, y: 264 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 552, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 576, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 600, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 624, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 648, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 672, y: 264 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 696, y: 264 },
  },
  //** thirteenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 144, y: 288 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 192, y: 288 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 216, y: 288 },
  },
  {
    type: Tiles.squareCorner,
    direction: Direction.down,
    position: { x: 264, y: 288 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 288, y: 288 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 312, y: 288 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 336, y: 288 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 360, y: 288 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 384, y: 288 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 408, y: 288 },
  },
  {
    type: Tiles.squareCorner,
    direction: Direction.right,
    position: { x: 432, y: 288 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 480, y: 288 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 504, y: 288 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 552, y: 288 },
  },
  //** forteen row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 144, y: 312 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 192, y: 312 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 216, y: 312 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 480, y: 312 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 504, y: 312 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 552, y: 312 },
  },
  //** fifteen row
  {
    type: Tiles.doubleCorner,
    direction: Direction.left,
    position: { x: 0, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 24, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 48, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 72, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 96, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 120, y: 336 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 144, y: 336 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 192, y: 336 },
    flip: true,
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 216, y: 336 },
  },
  {
    type: Tiles.rectangle,
    direction: Direction.right,
    position: { x: 264, y: 336 },
    flip: true,
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 288, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 312, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 336, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 360, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 384, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 408, y: 336 },
  },
  {
    type: Tiles.rectangle,
    direction: Direction.right,
    position: { x: 432, y: 336 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 480, y: 336 },
    flip: true,
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 504, y: 336 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.down,
    position: { x: 552, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 576, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 600, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 624, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 648, y: 336 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 672, y: 336 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.up,
    position: { x: 696, y: 336 },
  },
  //** sixteeth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 360 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 360 },
  },
  //**seventeenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 384 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 48, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 72, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 96, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 120, y: 384 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 144, y: 384 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 192, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 216, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 240, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 264, y: 384 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 288, y: 384 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 336, y: 384 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.up,
    position: { x: 360, y: 384 },
  },

  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 408, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 432, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 456, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 480, y: 384 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 504, y: 384 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 552, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 576, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 600, y: 384 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 624, y: 384 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 648, y: 384 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 384 },
  },
  //**eighteenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 48, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 144, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 192, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 288, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 336, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 360, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 408, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 504, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 552, y: 408 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 648, y: 408 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 408 },
  },
  //**nineteenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 432 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 48, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 72, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 96, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 120, y: 432 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 144, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 336, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 360, y: 432 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 192, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 216, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 240, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 264, y: 432 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 288, y: 432 },
  },

  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 408, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 432, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 456, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 480, y: 432 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 504, y: 432 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 552, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 576, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 600, y: 432 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 624, y: 432 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 648, y: 432 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 432 },
  },
  //**twentieth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 0, y: 456 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 336, y: 456 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 360, y: 456 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 696, y: 456 },
  },
  //**twenty first row
  {
    type: Tiles.doubleCorner,
    direction: Direction.down,
    position: { x: 0, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 24, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 48, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 72, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 96, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 120, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 144, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 168, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 192, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 216, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 240, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 264, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 288, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 312, y: 480 },
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.up,
    position: { x: 336, y: 480 },
    flip: true,
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.down,
    position: { x: 360, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 384, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 408, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 432, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 456, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 480, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 504, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 528, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 552, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 576, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 600, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 624, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 648, y: 480 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 672, y: 480 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.right,
    position: { x: 696, y: 480 },
  },
];



