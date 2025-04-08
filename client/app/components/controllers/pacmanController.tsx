import { useEffect, useMemo, useState } from "react";
import Pacman from "../sprites/pacman";
import {
  setPacmanState,
  setPacmanPosition,
  setPacmanSize,
  setPacmanDirection,
} from "~/store/pacmanSlice";
import SoundPlayer from "../utils/soundPlayer";
import CheckCollision from "../utils/checkCollision";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store";
import { PacState } from "../enums/pacman";
import { Direction } from "../enums/global";
import { Scenes } from "../enums/scene";
import { setGameState } from "~/store/gameSlice";
import { GameStates } from "../enums/game";
import { pacmanInitialPos } from "../enums/maps";

export default function PacmanController() {
  const dispatch = useDispatch();
  const pacman = useSelector((state: RootState) => state.pacman);
  const game = useSelector((state: RootState) => state.game);
  const { scene } = useSelector((state: RootState) => state.scene);
  const { tiles, tileSize } = useSelector((state: RootState) => state.map);
  const [animation, setAnimation] = useState("");
  const [speed, setSpeed] = useState(12);
  const boost = pacman.state === "power" ? 1.5 : 1;

  const [keyState, setKeyState] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  const keyStateMemo = useMemo(
    () => keyState,
    [keyState.up, keyState.down, keyState.left, keyState.right]
  );

  //**change depending on the map
  useEffect(() => {
    switch (scene) {
      case Scenes.challengeMap:
        dispatch(setPacmanSize(12));
        dispatch(setPacmanPosition({ x: 24, y: 24 }));
        setSpeed(Math.round(4 * boost));
        break;
      case Scenes.classicMap:
        dispatch(setPacmanSize(24));
        dispatch(setPacmanPosition({ x: 24, y: 24 }));
        setSpeed(Math.round(8 * boost));
        break;
      case Scenes.smallMap:
        dispatch(setPacmanSize(36));
        dispatch(setPacmanPosition(pacmanInitialPos.smallMap));
        setSpeed(Math.round(12 * boost));
        break;
      default:
        dispatch(setPacmanSize(36));
        dispatch(setPacmanPosition(pacmanInitialPos.smallMap));
        setSpeed(Math.round(12 * boost));
        break;
    }
  }, [scene, dispatch]);
  //**change animation depending on the state
  useEffect(() => {
    switch (pacman.state) {
      case "idle":
        setAnimation("");
        break;
      case "chop":
        setAnimation("chop");
        break;
      case "power":
        setAnimation("power");
        break;
      case "dead":
        setAnimation("dead");
        SoundPlayer.PlaySound({ folder: "gameplay", audio: "death" });
        break;
      default:
        setAnimation("");
        break;
    }
  }, [pacman.state]);

  //** Handle keydown and keyup events
  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      setKeyState((prev) => {
        const newState = { ...prev };

        switch (e.key) {
          case "ArrowUp":
            if (!prev.up) newState.up = true;
            break;
          case "ArrowDown":
            if (!prev.down) newState.down = true;
            break;
          case "ArrowLeft":
            if (!prev.left) newState.left = true;
            break;
          case "ArrowRight":
            if (!prev.right) newState.right = true;
            break;
          default:
            return prev;
        }

        return prev === newState ? prev : newState;
      });
    };

    const handleKeyUp = (e: { key: string }) => {
      switch (e.key) {
        case "ArrowUp":
          setKeyState((prev) => ({ ...prev, up: false }));
          break;
        case "ArrowDown":
          setKeyState((prev) => ({ ...prev, down: false }));
          break;
        case "ArrowLeft":
          setKeyState((prev) => ({ ...prev, left: false }));
          break;
        case "ArrowRight":
          setKeyState((prev) => ({ ...prev, right: false }));
          break;
        default:
          break;
      }
    };

    //** Add event listeners for keydown and keyup
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    //** Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (
      !keyStateMemo.up &&
      !keyStateMemo.down &&
      !keyStateMemo.left &&
      !keyStateMemo.right
    ) {
      if (pacman.state !== PacState.idle && pacman.state !== PacState.dead && pacman.state !== PacState.power)
        dispatch(setPacmanState(PacState.idle)); // Evita renders innecesarios
    } else {
      if (pacman.state !== PacState.chop && pacman.state !== PacState.power)
        dispatch(setPacmanState(PacState.chop)); // Solo cambia si es diferente
    }
    if (
      (keyStateMemo.up ||
        keyStateMemo.down ||
        keyStateMemo.left ||
        keyStateMemo.right) &&
      game.state === GameStates.start
    ) {
      dispatch(setGameState(GameStates.playing));
    }
  }, [keyStateMemo, pacman.state, dispatch]);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      let newX = pacman.position.x;
      let newY = pacman.position.y;

      if (keyState.up) {
        newY -= speed;
        dispatch(setPacmanDirection(Direction.up));
      } else if (keyState.down) {
        newY += speed;
        dispatch(setPacmanDirection(Direction.down));
      } else if (keyState.left) {
        newX -= speed;
        dispatch(setPacmanDirection(Direction.left));
      } else if (keyState.right) {
        newX += speed;
        dispatch(setPacmanDirection(Direction.right));
      }

      const newPos = { x: newX, y: newY };
      const isColliding = tiles.some((part: any) =>
        CheckCollision({
          objectA: newPos,
          sizeA: pacman.size,
          objectB: part.position,
          sizeB: tileSize,
        })
      );

      if (!isColliding) {
        dispatch(setPacmanPosition(newPos)); // ✅ Redux updates the state
      }
    }, 16);

    return () => clearInterval(moveInterval);
  }, [
    dispatch,
    keyState,
    speed,
    tiles,
    pacman.size,
    tileSize,
    pacman.position,
    pacman.direction,
  ]);

  return (
    <span
      style={{
        position: "absolute",
        top: `${pacman.position.y}px`,
        left: `${pacman.position.x}px`,
        zIndex: 4,
      }}
    >
      <Pacman
        size={pacman.size}
        direction={pacman.direction}
        animation={animation}
      />
    </span>
  );
}
