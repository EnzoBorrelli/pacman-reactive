import { Tile } from "~/store/mapSlice";
import { Direction } from "../enums/global";
import { Tiles } from "../enums/tiles";

export const smallMap: Tile[] = [
  //**first row
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
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 392, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 416, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 440, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 464, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 488, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 512, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 536, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 560, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 584, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 608, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 632, y: 110 },
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.up,
    position: { x: 656, y: 110 },
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.down,
    position: { x: 680, y: 110 },
    flip: true,
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 704, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 728, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 752, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 776, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 800, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 824, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 848, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 872, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 896, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 920, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 944, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 968, y: 110 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 992, y: 110 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.up,
    position: { x: 1016, y: 110 },
  },
  //**second row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 134 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 656, y: 134 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 680, y: 134 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 134 },
  },
  //**third row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 368, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 392, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 416, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 440, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 464, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 512, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 536, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 560, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 584, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 608, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 656, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 680, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 728, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 752, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 776, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 800, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 824, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 872, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 896, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 920, y: 158 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 944, y: 158 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 968, y: 158 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 158 },
  },
  //**fourth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 368, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 464, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 512, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 608, y: 182 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.down,
    position: { x: 656, y: 182 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.right,
    position: { x: 680, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 728, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 824, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 872, y: 182 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 968, y: 182 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 182 },
  },
  //**fifth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 206 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 368, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 392, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 416, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 440, y: 206 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 464, y: 206 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 512, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 536, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 560, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 584, y: 206 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 608, y: 206 },
  },

  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 728, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 752, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 776, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 800, y: 206 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 824, y: 206 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 872, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 896, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 920, y: 206 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 944, y: 206 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 968, y: 206 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 206 },
  },
  //** sixth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 230 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 230 },
  },
  //** seventh row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 254 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 254 },
  },
  //** eigth row
  {
    type: Tiles.doubleCorner,
    direction: Direction.down,
    position: { x: 320, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 344, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 368, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 392, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 416, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 440, y: 278 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.up,
    position: { x: 464, y: 278 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 872, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 896, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 920, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 944, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 968, y: 278 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 992, y: 278 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.right,
    position: { x: 1016, y: 278 },
  },
  //** ninth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 464, y: 302 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 872, y: 302 },
  },
  //** tenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 320, y: 326 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 1016, y: 326 },
  },

  //** twelfth row
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 320, y: 374 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.up,
    position: { x: 1016, y: 374 },
  },
  //** thirteenth row
  {
    type: Tiles.doubleCorner,
    direction: Direction.left,
    position: { x: 320, y: 398 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.up,
    position: { x: 1016, y: 398 },
  },
  //** forteenth row
  {
    type: Tiles.doubleCorner,
    direction: Direction.left,
    position: { x: 320, y: 422 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.up,
    position: { x: 1016, y: 422 },
  },
  //** fifteenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 446 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 446 },
  },
  //** sixteeth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 470 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 470 },
  },
  //**seventeenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 494 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 368, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 392, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 416, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 440, y: 494 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 464, y: 494 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 512, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 536, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 560, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 584, y: 494 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 608, y: 494 },
  },

  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 728, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 752, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 776, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 800, y: 494 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 824, y: 494 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.left,
    position: { x: 872, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 896, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 920, y: 494 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.up,
    position: { x: 944, y: 494 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.up,
    position: { x: 968, y: 494 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 494 },
  },
  //**eighteenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 368, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 464, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 512, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 608, y: 518 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.left,
    position: { x: 656, y: 518 },
  },
  {
    type: Tiles.miniCorner,
    direction: Direction.up,
    position: { x: 680, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 728, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 824, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 872, y: 518 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 968, y: 518 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 518 },
  },
  //**nineteenth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 542 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 368, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 392, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 416, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 440, y: 542 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 464, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 656, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 680, y: 542 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 512, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 536, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 560, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 584, y: 542 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 608, y: 542 },
  },

  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 728, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 752, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 776, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 800, y: 542 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 824, y: 542 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.down,
    position: { x: 872, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 896, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 920, y: 542 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.down,
    position: { x: 944, y: 542 },
  },
  {
    type: Tiles.simpleCorner,
    direction: Direction.right,
    position: { x: 968, y: 542 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 542 },
  },
  //**twentieth row
  {
    type: Tiles.doubleWall,
    direction: Direction.left,
    position: { x: 320, y: 566 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.right,
    position: { x: 656, y: 566 },
  },
  {
    type: Tiles.simpleWall,
    direction: Direction.left,
    position: { x: 680, y: 566 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.right,
    position: { x: 1016, y: 566 },
  },
  //**twenty first row
  {
    type: Tiles.doubleCorner,
    direction: Direction.down,
    position: { x: 320, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 344, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 368, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 392, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 416, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 440, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 464, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 488, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 512, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 536, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 560, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 584, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 608, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 632, y: 590 },
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.up,
    position: { x: 656, y: 590 },
    flip: true,
  },
  {
    type: Tiles.cornerWall,
    direction: Direction.down,
    position: { x: 680, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 704, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 728, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 752, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 776, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 800, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 824, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 848, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 872, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 896, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 920, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 944, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 968, y: 590 },
  },
  {
    type: Tiles.doubleWall,
    direction: Direction.down,
    position: { x: 992, y: 590 },
  },
  {
    type: Tiles.doubleCorner,
    direction: Direction.right,
    position: { x: 1016, y: 590 },
  },
];
