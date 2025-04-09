import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import MazeController from "./mazeController";
import PacmanController from "./pacmanController";
import {
  setPacmanDirection,
  setPacmanPosition,
  setPacmanState,
} from "~/store/pacmanSlice";
import { useEffect } from "react";
import { GameStates } from "../enums/game";
import ObjectsController from "./objectsController";
import Score from "../ui/score";
import { PacState } from "../enums/pacman";
import SoundPlayer from "../utils/soundPlayer";
import { Direction } from "../enums/global";
import {
  setGameLives,
  setGameScore,
  setGameState,
  setPreviousGameState,
} from "~/store/gameSlice";
import FraidController from "./fraidController";
import Lives from "../ui/lives";

export default function GameController() {
  const { mapSize } = useSelector((state: RootState) => state.map);
  const { position, state } = useSelector((state: RootState) => state.pacman);
  const game = useSelector((state: RootState) => state.game);
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
    if (game.state === GameStates.lostLife) {
      dispatch(setGameLives(game.lives - 1));
      dispatch(setGameState(GameStates.playing));
    }
  }, [position, dispatch, game.state]);

  useEffect(() => {
    if (state === PacState.power) {
      const frightSound = SoundPlayer.PlaySound({
        folder: "gameplay",
        audio: "fright",
        loop: true,
      });

      const timer = setTimeout(() => {
        dispatch(setPacmanState(PacState.chop));
      }, 8000);

      return () => {
        clearTimeout(timer);
        frightSound.stop(); // stop the loop when effect is cleaned up
      };
    }

    if (state === PacState.dead) {
      const timer = setTimeout(() => {
        dispatch(setPreviousGameState(GameStates.lostLife));
        dispatch(setGameState(GameStates.lostLife));
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [state, dispatch]);

  useEffect(() => {
    if (game.lives < 1) {
      dispatch(setPreviousGameState(GameStates.lose));
      dispatch(setGameState(GameStates.lose));
    }
  }, [game.lives, dispatch]);

  useEffect(() => {
    if (
      game.state === GameStates.playing &&
      game.previousState === GameStates.start
    ) {
      dispatch(setPacmanDirection(Direction.right));
      dispatch(setGameScore(0));
    }
  }, [dispatch, game.state, game.previousState]);
  return (
    <div className="relative" style={{ width: mapSize.x, height: mapSize.y }}>
      <PacmanController />
      <MazeController />
      <ObjectsController />
      <FraidController />
      <Score score={game.score} />
      <Lives />
    </div>
  );
}
