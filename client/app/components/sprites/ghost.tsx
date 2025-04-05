import { useEffect, useState } from "react";
import { GhostState, GhostType } from "../enums/ghosts";
import { CharacterSize, Direction } from "../enums/global";

interface iGhost {
  type: GhostType;
  size: CharacterSize;
  direction: Direction;
  state: GhostState;
}

function useWalkAnimation(_ghost: string, interval = 150) {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const animation = setInterval(() => {
      setCurrentFrame((prev) => (prev === 1 ? 2 : 1));
    }, interval);

    return () => clearInterval(animation);
  }, [interval]);

  return `/assets/sprites/ghosts/body/${_ghost}_${currentFrame}.png`;
}

function useGhostCycle(ghosts = ["fright", "ghost"], switchInterval = 400) {
  const [currentGhost, setCurrentGhost] = useState("fright");

  useEffect(() => {
    let index = 0;
    const cycle = setInterval(() => {
      index = index === 0 ? 1 : 0;
      setCurrentGhost(ghosts[index]);
    }, switchInterval);

    return () => clearInterval(cycle);
  }, [switchInterval]);

  return currentGhost;
}

export default function Ghost({ type, size, direction, state }: iGhost) {
  const _direction = `/assets/sprites/ghosts/eyes/${direction}.png`;
  const recoveringGhost = useGhostCycle();

  const walkSprite = useWalkAnimation(type);
  const frightSprite = useWalkAnimation("fright");
  const recoveringSprite = useWalkAnimation(recoveringGhost);

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
