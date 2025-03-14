import React, { useEffect, useState } from "react";

export default function Ghost({ ghost, map, direction, state }) {
  let _direction = `/assets/sprites/ghosts/eyes/${direction}.png`;
  let size = "size-[32px]";

  switch (map) {
    case "challenge":
      size = "size-[32px]";
      break;
    case "classic":
      size = "size-[48px]";
      break;
    case "small":
      size = "size-[64px]";
      break;
    default:
      size = "size-[32px]";
      break;
  }

  function WalkAnimation(_ghost, interval = 150) {
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
      case "walking":
        return WalkAnimation(ghost);
      case "frightened":
        return WalkAnimation("fright");
      case "recovering":
        return WalkAnimation(recovering);
      default:
        return `/assets/sprites/ghosts/body/${ghost}_1.png`;
    }
  }

  return (
    <div className="relative flex items-center justify-center">
      <img
        className={`${size} ${state === "eaten" ? "opacity-0" : ""}`}
        src={useAnimation()}
      />
      <img
        className={`${size} absolute ${
          state === "frightened" || state === "recovering" ? "opacity-0" : ""
        }`}
        src={_direction}
      />
    </div>
  );
}
