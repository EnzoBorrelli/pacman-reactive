import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import Dot from "../sprites/dot";
import CheckCollision from "../utils/checkCollision";
import { useEffect } from "react";
import SoundPlayer from "../utils/soundPlayer";
import { setGameScore } from "~/store/gameSlice";
import { setPacmanState } from "~/store/pacmanSlice";
import { PacState } from "../enums/pacman";
import { removeDot } from "~/store/mapSlice";

interface iDotController {
  position: { x: number; y: number };
  size: number;
  power: boolean;
}

export default function DotController({ position, size, power }: iDotController) {
  const pacman = useSelector((state: RootState) => state.pacman);
  const score = useSelector((state: RootState) => state.game.score);
  const dotsLayout = useSelector((state: RootState) => state.map.dotsLayout.layout);
  const dispatch = useDispatch();

  const isColliding = CheckCollision({
    objectA: pacman.position,
    sizeA: pacman.size,
    objectB: position,
    sizeB: size,
  });

  const dotToMatrix = () => ({
    x: Math.floor(position.x / size - 1),
    y: Math.floor(position.y / size - 1),
  });

  useEffect(() => {
    if (isColliding) {
      const { x, y } = dotToMatrix();
      if (dotsLayout[y]?.[x] !== 0) {
        dispatch(removeDot({ x, y }));

        if (power) {
          SoundPlayer({ folder: "gameplay", audio: "eat_dot_1", loop: false }); // chomp
          dispatch(setGameScore(score + 50));
          dispatch(setPacmanState(PacState.power));
        } else {
          SoundPlayer({ folder: "gameplay", audio: "eat_dot_0", loop: false }); // chomp
          dispatch(setGameScore(score + 10));
        }              
      }
    }
  }, [isColliding]); // ✅ No unnecessary dependencies

  // ✅ Remove dots via Redux instead of local state
  const { x, y } = dotToMatrix();
  if (dotsLayout[y]?.[x] === 0) return null; // Prevent re-rendering eaten dots

  return (
    <span
      className="items-center justify-center flex"
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
