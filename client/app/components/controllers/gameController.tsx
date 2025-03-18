import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import MazeController from "./mazeController";
import PacmanController from "./pacmanController";
import { setPacmanPosition, setPacmanState } from "~/store/pacmanSlice";
import { useEffect, useState } from "react";
import { GameStates } from "../enums/game";
import ObjectsController from "./objectsController";
import Score from "../ui/score";
import { PacState } from "../enums/pacman";
import SoundPlayer from "../utils/soundPlayer";

export default function GameController() {
  const { mapSize } = useSelector((state: RootState) => state.map);
  const { position, state } = useSelector((state: RootState) => state.pacman);
  const game = useSelector((state: RootState) => state.game);
  const [isPowered, setIsPowered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (game.state === GameStates.playing) {
      if (position.x <= 0) {
        dispatch(setPacmanPosition({ x: mapSize.x - 12, y: position.y }));
      }
      if (position.x >= mapSize.x) {
        dispatch(setPacmanPosition({ x: 12, y: position.y }));
      }
    }
  }, [position, dispatch, game.state]);

  useEffect(() => {
    if (state === PacState.power) {
      setIsPowered(true);
      const interval = setInterval(() => {
        SoundPlayer({ folder: "gameplay", audio: "fright" });
      }, 900);
      const timer = setTimeout(() => {
        dispatch(setPacmanState(PacState.chop));
        setIsPowered(false);
      }, 8000);
      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [state]);
  return (
    <div className="relative" style={{ width: mapSize.x, height: mapSize.y }}>
      <PacmanController />
      <MazeController />
      <ObjectsController />
      <Score score={game.score} />
    </div>
  );
}
