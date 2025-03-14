import React, { useEffect } from "react";
import PacmanController from "../../components/controllers/pacmanController";
import { usePacman } from "../../../providers/pacmanProvider";
import MazeController from "../../components/controllers/mazeController";
export default function Small() {
  const { position, state, setPosition } = usePacman();
  const debug = false;

  /*useEffect(() => {
    if (position.x < 100) setPosition({ x: 100, y: position.y });
    if (position.x > 1200) setPosition({ x: 1200, y: position.y });
    if (position.y < 50) setPosition({ x: position.x, y: 50 });
    if (position.y > 550) setPosition({ x: position.x, y: 550 });
  }, [position]);*/

  return (
    <main className="flex flex-col items-center w-full p-4 pt-6 h-dvh">
      <div className="flex flex-row">
        <h2
          className={`${
            debug ? "flex" : "hidden"
          } flex-col items-center justify-center gap-2 text-white`}
        >
          <span>Pacman position</span>
          <span>
            x:{position.x} Y:{position.y}
          </span>
          <span>Pacman state: {state}</span>
        </h2>
        <span className="bg-red-500 w-[720px] h-[504px] -mt-[2px]"></span>
      </div>
      <PacmanController map="small" isPowered={false} />
      <MazeController map="small" />
      
    </main>
  );
}
