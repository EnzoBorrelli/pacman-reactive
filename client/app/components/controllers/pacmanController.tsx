import { useEffect, useMemo, useRef, useState } from "react";
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
import { CharacterSize, Direction } from "../enums/global";
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

  const initialPosRef = useRef({ x: 0, y: 0 });
  const speedRef = useRef(speed);

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
    let baseSpeed = 12;

    switch (scene) {
      case Scenes.challengeMap:
        dispatch(setPacmanSize(CharacterSize.challenge));
        dispatch(setPacmanPosition({ x: 24, y: 24 }));
        initialPosRef.current = pacmanInitialPos.smallMap;
        baseSpeed = 4;
        break;
      case Scenes.classicMap:
        dispatch(setPacmanSize(CharacterSize.classic));
        dispatch(setPacmanPosition({ x: 24, y: 24 }));
        initialPosRef.current = pacmanInitialPos.smallMap;
        baseSpeed = 8;
        break;
      case Scenes.smallMap:
      default:
        dispatch(setPacmanSize(CharacterSize.small));
        dispatch(setPacmanPosition(pacmanInitialPos.smallMap));
        initialPosRef.current = pacmanInitialPos.smallMap;
        baseSpeed = 12;
        break;
    }

    speedRef.current = baseSpeed;
    setSpeed(baseSpeed);
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
      if (
        pacman.state !== PacState.idle &&
        pacman.state !== PacState.dead &&
        pacman.state !== PacState.power
      )
        dispatch(setPacmanState(PacState.idle)); // Evita renders innecesarios
    } else {
      if (
        pacman.state !== PacState.chop &&
        pacman.state !== PacState.power &&
        pacman.state !== PacState.dead
      )
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
    if (pacman.state === PacState.power) {
      setSpeed(Math.round(speedRef.current * 1.5));
    } else if (
      pacman.state === PacState.chop ||
      pacman.state === PacState.idle
    ) {
      setSpeed(speedRef.current);
    }
  }, [pacman.state]);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      let { x: newX, y: newY } = pacman.position;

      const direction = keyState.up
        ? Direction.up
        : keyState.down
        ? Direction.down
        : keyState.left
        ? Direction.left
        : keyState.right
        ? Direction.right
        : null;

      if (direction && pacman.state !== PacState.dead) {
        dispatch(setPacmanDirection(direction));

        for (let i = 0; i < speed; i++) {
          let tempX = newX;
          let tempY = newY;

          switch (direction) {
            case Direction.up:
              tempY -= 1;
              break;
            case Direction.down:
              tempY += 1;
              break;
            case Direction.left:
              tempX -= 1;
              break;
            case Direction.right:
              tempX += 1;
              break;
          }

          const newPos = { x: tempX, y: tempY };
          const isColliding = tiles.some((tile: any) =>
            CheckCollision({
              objectA: newPos,
              sizeA: pacman.size,
              objectB: tile.position,
              sizeB: tileSize,
            })
          );

          if (!isColliding) {
            newX = tempX;
            newY = tempY;
          } else {
            break; // stop moving in this direction
          }
        }

        dispatch(setPacmanPosition({ x: newX, y: newY }));
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
    pacman.state,
  ]);

  useEffect(() => {
    if (
      game.state === GameStates.lostLife ||
      (game.state === GameStates.playing &&
        game.previousState === GameStates.nextLevel)
    ) {
      dispatch(setPacmanState(PacState.idle));
      dispatch(setPacmanPosition(initialPosRef.current));
      dispatch(setPacmanDirection(Direction.right));
    }
  }, [game.state, dispatch]);

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
