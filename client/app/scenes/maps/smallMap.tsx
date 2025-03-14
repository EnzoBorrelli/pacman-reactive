import PacmanController from "../../components/controllers/pacmanController";
import MazeController from "../../components/controllers/mazeController";
import { useSelector } from "react-redux";
import { RootState } from "~/store";

export default function SmallMap() {
  const pacman = useSelector((state: RootState) => state.pacman);
  const debug = false;

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
            x:{pacman.position.x} Y:{pacman.position.y}
          </span>
          <span>Pacman state: {pacman.state}</span>
        </h2>
        <span className="bg-red-500 w-[720px] h-[504px] -mt-[2px]"></span>
      </div>
      <PacmanController map="small" />
      <MazeController map="small" />
    </main>
  );
}
