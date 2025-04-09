import { Direction, objectSize } from "../enums/global";
import { Tiles } from "../enums/tiles";

interface iMazePart {
  direction: Direction;
  size: objectSize;
  type: Tiles;
  isFlip?: boolean;
}

export default function MazePart({ direction, size, type, isFlip }: iMazePart) {
  let flip = isFlip ? "scale-x-[-1]" : "";
  let mazePart = `/assets/sprites/map/${type}.png`;

  let rotation: string;

  switch (direction) {
    case "left":
      rotation = "";
      break;
    case "up":
      rotation = "rotate-90";
      break;
    case "right":
      rotation = "rotate-180";
      break;
    case "down":
      rotation = "-rotate-90";
      break;

    default:
      rotation = "";
      break;
  }
  return (
    <div className={`${rotation} ${flip}`}>
      <img style={{ width: size, height: size }} src={mazePart} alt="tile" />
    </div>
  );
}
