import { Direction, objectSize } from "../enums/global";
import { Tiles } from "../enums/tiles";
import MazePart from "../sprites/mazePart";

interface iTileController {
  position: { x: number; y: number };
  type: Tiles;
  size: objectSize;
  direction: Direction;
  isFlip: boolean;
}

export default function TileController({
  position,
  type,
  size,
  direction,
  isFlip,
}: iTileController) {
  const debug = false;
  return (
    <span
    className={debug ? "ring-1 ring-red-500" : ""}
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: 1,
      }}
    >
      <MazePart type={type} size={size} direction={direction} isFlip={isFlip} />
    </span>
  );
}
