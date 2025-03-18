import { useSelector } from "react-redux";
import { RootState } from "~/store";
import Dot from "../sprites/dot";
import CheckCollision from "../utils/checkCollision";
import { useEffect, useState } from "react";
import SoundPlayer from "../utils/soundPlayer";

interface iDotController {
  position: { x: number; y: number };
  size: number;
  power: boolean;
}

export default function DotController({
  position,
  size,
  power,
}: iDotController) {
  const pacman = useSelector((state: RootState) => state.pacman);
  const [isEaten, setIsEaten] = useState(false);

  const isColliding = CheckCollision({
    objectA: pacman.position,
    sizeA: pacman.size,
    objectB: position,
    sizeB: size,
  });

  useEffect(() => {
    if (isColliding) {
      if (!isEaten) {
        setIsEaten(true);
        SoundPlayer({ folder: "gameplay", audio: "eat_dot_0" });
      }
    }
  }, [isColliding]);

  return (
    <span
      className={` items-center justify-center ${isEaten ? "hidden" : "flex"}`}
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: 1,
        width: size,
        height: size,
      }}
    >
      <Dot isPower={power} size={size} />
    </span>
  );
}
