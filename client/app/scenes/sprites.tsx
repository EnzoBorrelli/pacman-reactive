import Dot from "../components/sprites/dot";
import Ghost from "../components/sprites/ghost";
import Pacman from "../components/sprites/pacman";
import Fruit from "../components/sprites/fruit";
import MazePart from "../components/sprites/mazePart";
import {
  CharacterSize,
  Direction,
  objectSize,
} from "~/components/enums/global";
import { PacState } from "~/components/enums/pacman";
import { GhostState, GhostType } from "~/components/enums/ghosts";
import { Tiles } from "~/components/enums/tiles";

export default function Sprites() {
  return (
    <main className="flex flex-col items-center w-full p-4 h-dvh">
      <h2 className="mb-10 text-xl font-bold tracking-wider text-center text-slate-300">
        Sprites Display
      </h2>
      <div className="flex items-center justify-center gap-6">
        <Pacman
          size={CharacterSize.small}
          direction={Direction.right}
          animation={PacState.chop}
        />
        <Dot size={16} isPower={false} />
        <Dot size={16} isPower={true} />
        <Ghost
          size={CharacterSize.small}
          type={GhostType.inky}
          direction={Direction.up}
          state={GhostState.walking}
        />
        <Ghost
          size={CharacterSize.small}
          type={GhostType.blinky}
          direction={Direction.down}
          state={GhostState.walking}
        />
        <Ghost
          size={CharacterSize.small}
          type={GhostType.pinky}
          direction={Direction.left}
          state={GhostState.walking}
        />
        <Ghost
          size={CharacterSize.small}
          type={GhostType.clyde}
          direction={Direction.right}
          state={GhostState.walking}
        />
        <Ghost
          size={CharacterSize.small}
          type={GhostType.clyde}
          direction={Direction.right}
          state={GhostState.frightened}
        />
        <Ghost
          size={CharacterSize.small}
          type={GhostType.clyde}
          direction={Direction.right}
          state={GhostState.recovering}
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <Fruit size={objectSize.small} ID={1} />
        <Fruit size={objectSize.small} ID={2} />
        <Fruit size={objectSize.small} ID={3} />
        <Fruit size={objectSize.small} ID={4} />
        <Fruit size={objectSize.small} ID={5} />
        <Fruit size={objectSize.small} ID={6} />
        <Fruit size={objectSize.small} ID={7} />
        <Fruit size={objectSize.small} ID={8} />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <MazePart
          type={Tiles.doubleWall}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.doubleWall}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.doubleWall}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.doubleWall}
          size={objectSize.small}
          direction={Direction.up}
        />
        <MazePart
          type={Tiles.simpleWall}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.simpleWall}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.simpleWall}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.simpleWall}
          size={objectSize.small}
          direction={Direction.up}
        />
        <MazePart
          type={Tiles.cornerWall}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.cornerWall}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.cornerWall}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.cornerWall}
          size={objectSize.small}
          direction={Direction.up}
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <MazePart
          type={Tiles.doubleCorner}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.doubleCorner}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.doubleCorner}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.doubleCorner}
          size={objectSize.small}
          direction={Direction.up}
        />
        <MazePart
          type={Tiles.simpleCorner}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.simpleCorner}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.simpleCorner}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.simpleCorner}
          size={objectSize.small}
          direction={Direction.up}
        />
        <MazePart
          type={Tiles.miniCorner}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.miniCorner}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.miniCorner}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.miniCorner}
          size={objectSize.small}
          direction={Direction.up}
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <MazePart
          type={Tiles.longCorner}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.longCorner}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.longCorner}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.longCorner}
          size={objectSize.small}
          direction={Direction.up}
        />
        <MazePart
          type={Tiles.squareCorner}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.squareCorner}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.squareCorner}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.squareCorner}
          size={objectSize.small}
          direction={Direction.up}
        />
        <MazePart
          type={Tiles.rectangle}
          size={objectSize.small}
          direction={Direction.right}
        />
        <MazePart
          type={Tiles.rectangle}
          size={objectSize.small}
          direction={Direction.down}
        />
        <MazePart
          type={Tiles.rectangle}
          size={objectSize.small}
          direction={Direction.left}
        />
        <MazePart
          type={Tiles.rectangle}
          size={objectSize.small}
          direction={Direction.up}
        />
      </div>
    </main>
  );
}
