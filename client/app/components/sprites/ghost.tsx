import { useEffect, useState } from "react";
import { GhostState, GhostType } from "../enums/ghosts";
import { CharacterSize, Direction } from "../enums/global";

interface iGhost {
  type: GhostType;
  size: CharacterSize;
  direction: Direction;
  state: GhostState;
}

export default function Ghost({ type, size, direction, state }: iGhost) {
  let _direction = `/assets/sprites/ghosts/eyes/${direction}.png`;

  function WalkAnimation(_ghost: string, interval = 150) {
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
    const [currentGhost, setCurrentGhost] = useState(ghosts[0]);

    useEffect(() => {
      let index = 0;
      const cycle = setInterval(() => {
        index = index === 0 ? 1 : 0; // Loop through ghosts
        setCurrentGhost(ghosts[index]);
      }, switchInterval);

      return () => clearInterval(cycle);
    }, [switchInterval]);

    return currentGhost;
  }

  const recovering = useGhostCycle();

  function useAnimation() {
    switch (state) {
      case GhostState.walking:
        return WalkAnimation(type);
      case GhostState.frightened:
        return WalkAnimation("fright");
      case GhostState.recovering:
        return WalkAnimation(recovering);
      default:
        return `/assets/sprites/ghosts/body/${type}_1.png`;
    }
  }

  return (
    <div
      style={{ paddingTop: size / 8 }}
      className="relative flex items-center justify-center"
    >
      <img
        className={`${size} ${
          state === GhostState.frightened ? "opacity-0" : ""
        }`}
        src={useAnimation()}
      />
      <img
        className={`${size} absolute ${
          state === "frightened" || state === GhostState.recovering
            ? "opacity-0"
            : ""
        }`}
        src={_direction}
      />
    </div>
  );
}
