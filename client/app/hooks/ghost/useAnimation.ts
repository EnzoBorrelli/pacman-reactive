import { useState, useEffect } from "react";

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

function RecoverAnimation(ghosts = ["fright", "ghost"], switchInterval = 400) {
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

export default {WalkAnimation, RecoverAnimation};