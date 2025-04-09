import { GhostState, GhostType } from "../enums/ghosts";
import { CharacterSize, Direction } from "../enums/global";
import useAnimation from "~/hooks/ghost/useAnimation";

interface iGhost {
  type: GhostType;
  size: CharacterSize;
  direction: Direction;
  state: GhostState;
}




export default function Ghost({ type, size, direction, state }: iGhost) {
  const _direction = `/assets/sprites/ghosts/eyes/${direction}.png`;
  const recoveringGhost = useAnimation.RecoverAnimation();

  const walkSprite = useAnimation.WalkAnimation(type);
  const frightSprite = useAnimation.WalkAnimation("fright");
  const recoveringSprite = useAnimation.WalkAnimation(recoveringGhost);

  const bodySrc = (() => {
    switch (state) {
      case GhostState.walking:
        return walkSprite;
      case GhostState.frightened:
        return frightSprite;
      case GhostState.recovering:
        return recoveringSprite;
      default:
        return `/assets/sprites/ghosts/body/${type}_1.png`;
    }
  })();

  return (
    <div
      style={{ paddingTop: size / 8 }}
      className="relative flex items-center justify-center"
    >
      <img
        style={{ width: size, height: size }}
        className={`${state === GhostState.eaten ? "opacity-0" : ""}`}
        src={bodySrc}
      />
      <img
        style={{ width: size, height: size }}
        className={` absolute ${
          state === GhostState.frightened || state === GhostState.recovering
            ? "opacity-0"
            : ""
        }`}
        src={_direction}
      />
    </div>
  );
}
