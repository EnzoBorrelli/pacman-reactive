import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { GhostState, GhostType } from "../enums/ghosts";
import Ghost from "../sprites/ghost";
import { useEffect, useState } from "react";
import { Scenes } from "../enums/scene";
import { ghostInitialPos } from "../enums/maps";
import { UnknownAction } from "redux";
import { Direction } from "../enums/global";
import CheckCollision from "../utils/checkCollision";
import { setGameScore } from "~/store/gameSlice";
import SoundPlayer from "../utils/soundPlayer";
import { setPacmanState } from "~/store/pacmanSlice";
import { PacState } from "../enums/pacman";

type Position = { x: number; y: number };
interface GhostControllerProps {
  ghostActions: {
    setGhostSize: (size: number) => UnknownAction;
    setGhostPosition: (position: Position) => UnknownAction;
    setGhostDirection: (direction: Direction) => UnknownAction;
    setGhostState: (state: GhostState) => UnknownAction;
  };
  ghost: {
    position: Position;
    size: number;
    direction: Direction;
    state: GhostState;
  };
  type: GhostType;
}

export default function GhostController({
  ghostActions: {
    setGhostSize,
    setGhostPosition,
    setGhostDirection,
    setGhostState,
  },
  ghost,
  type,
}: GhostControllerProps) {
  const { scene } = useSelector((state: RootState) => state.scene);
  const { score } = useSelector((state: RootState) => state.game);
  const pacman = useSelector((state: RootState) => state.pacman);
  const dispatch = useDispatch();
  const [posOffset, setPosOffset] = useState({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
  const [spawn, setSpawn] = useState({ x: 0, y: 0 });

  function addPositions(p1: Position, p2: Position): Position {
    return {
      x: p1.x + p2.x,
      y: p1.y + p2.y,
    };
  }

  const isColliding = CheckCollision({
    objectA: pacman.position,
    sizeA: pacman.size,
    objectB: ghost.position,
    sizeB: ghost.size,
  });

  //based on the scene, set the ghost size and initial position
  useEffect(() => {
    switch (scene) {
      case Scenes.challengeMap:
        dispatch(setGhostSize(12));
        setInitialPos(ghostInitialPos.challengeMap);
        // setSpeed(Math.round(4 * boost));
        break;
      case Scenes.classicMap:
        dispatch(setGhostSize(24));
        setInitialPos(ghostInitialPos.classicMap);
        //setSpeed(Math.round(8 * boost));
        break;
      case Scenes.smallMap:
        dispatch(setGhostSize(36));
        setInitialPos(ghostInitialPos.smallMap);
        //setSpeed(Math.round(12 * boost));
        break;
      default:
        dispatch(setGhostSize(36));
        setInitialPos(ghostInitialPos.smallMap);
        //setSpeed(Math.round(12 * boost));
        break;
    }
  }, [scene, dispatch]);

  //set the spawn position based on the ghost type
  useEffect(() => {
    switch (type) {
      case GhostType.pinky:
        setPosOffset({ x: 0, y: 0 });
        break;
      case GhostType.inky:
        setPosOffset({ x: -ghost.size, y: 0 });
        break;
      case GhostType.clyde:
        setPosOffset({ x: ghost.size, y: 0 });
        break;
      case GhostType.blinky:
        setPosOffset({ x: 0, y: -(ghost.size * 2) });
        break;
      default:
        setPosOffset({ x: 0, y: 0 });
        break;
    }
    setSpawn(addPositions(initialPos, posOffset));
    dispatch(setGhostPosition(spawn));
  }, [type, dispatch, spawn]);

  useEffect(() => {
    if (pacman.state === PacState.power) {
      dispatch(setGhostState(GhostState.frightened));

      const timer = setTimeout(() => {
        dispatch(setGhostState(GhostState.recovering));
      }, 6000);

      // Cleanup the timeout if pacman state changes early
      return () => clearTimeout(timer);
    } else {
      dispatch(setGhostState(GhostState.walking));
    }
  }, [pacman.state, dispatch]);

  useEffect(() => {
    if (isColliding) {
      if (
        ghost.state === GhostState.frightened ||
        ghost.state === GhostState.recovering
      ) {
        dispatch(setGhostState(GhostState.eaten));
        dispatch(setGameScore(score + 200));
        SoundPlayer.PlaySound({ folder: "gameplay", audio: "eat_ghost" });
      } else if (ghost.state === GhostState.walking) {
        dispatch(setPacmanState(PacState.dead));
        console.log("💀");
      }
    }
  }, [isColliding, ghost.state, dispatch, score]);

  return (
    <span
      style={{
        position: "absolute",
        top: `${ghost.position.y}px`,
        left: `${ghost.position.x}px`,
        zIndex: 3,
      }}
    >
      <Ghost
        size={ghost.size}
        type={type}
        direction={ghost.direction}
        state={ghost.state}
      />
    </span>
  );
}
