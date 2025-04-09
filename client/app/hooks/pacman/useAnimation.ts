import { useState, useEffect } from "react";

function EatAnimation(interval = 80) {
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
      const animation = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % 3);
      }, interval);

      return () => clearInterval(animation);
    }, [interval]);

    return `/assets/sprites/pacman/phase_${currentFrame}.png`;
  }

  function DeathAnimation(interval = 100) {
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
      if (currentFrame >= 10) return; // Stop animation at frame 9

      const animation = setInterval(() => {
        setCurrentFrame((prev) => prev + 1);
      }, interval);

      return () => clearInterval(animation);
    }, [currentFrame, interval]);

    return `/assets/sprites/pacman/phase_${currentFrame}.png`;
  }

export default { EatAnimation, DeathAnimation };