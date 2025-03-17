import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import MazeController from "./mazeController";
import PacmanController from "./pacmanController";
import { setPacmanPosition } from "~/store/pacmanSlice";
import { useEffect } from "react";
import CollisionDebug from "../utils/debug/collisionDebug";

export default function GameController() {
  const { mapSize } = useSelector((state: RootState) => state.map);
  const { position } = useSelector((state: RootState) => state.pacman);
  const dispatch = useDispatch();

  useEffect(() => {
    if (position.x <= 0) {
      dispatch(setPacmanPosition({ x: mapSize.x - 12, y: position.y }));
    }
    if (position.x >= mapSize.x) {
      dispatch(setPacmanPosition({ x: 12, y: position.y }));
    }
  }, [position]);
  return (
    <div
      className="relative"
      style={{ width: mapSize.x, height: mapSize.y }}
    >
      <PacmanController map="small" />
      <MazeController map="small" />
      <CollisionDebug isDebug={false} />
    </div>
  );
}
