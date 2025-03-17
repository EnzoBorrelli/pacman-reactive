import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import MazeController from "./mazeController";
import PacmanController from "./pacmanController";
import { setPacmanPosition } from "~/store/pacmanSlice";
import { useEffect } from "react";
import CollisionDebug from "../utils/debug/collisionDebug";
import DotController from "./dotController";

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
      <DotController position={{x:24,y:24}} size={24} power={true}/>
      <DotController position={{x:48,y:24}} size={24} power={false}/>
      <DotController position={{x:72,y:24}} size={24} power={false}/>
      <DotController position={{x:96,y:24}} size={24} power={false}/>
      <DotController position={{x:120,y:24}} size={24} power={false}/>
      <DotController position={{x:144,y:24}} size={24} power={false}/>
    </div>
  );
}
