import { useEffect, useState } from "react";

interface iPacman {
  direction: string;
  size: number;
  animation: string;
}

export default function Pacman({ direction, size, animation }: iPacman) {
  let _direction: string; // If pacman is dying, rotate it 90 degrees

  //controls the direction
  switch (direction) {
    case "up":
      _direction = "-rotate-90";
      break;
    case "down":
      _direction = "rotate-90";
      break;
    case "left":
      _direction = "rotate-180";
      break;

    default:
      _direction = "";
      break;
  }

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

  function useAnimation() {
    switch (animation) {
      case "chop":
        return EatAnimation(80);
      case "power":
        return EatAnimation(50);
      case "dead":
        return DeathAnimation();
      default:
        return `/assets/sprites/pacman/phase_1.png`;
    }
  }

  return (
    <div style={{ paddingTop: size / 8 }} className={`${_direction}`}>
      <img
        style={{ width: size, height: size }}
        src={useAnimation()}
        alt="pacman"
      />
    </div>
  );
}
