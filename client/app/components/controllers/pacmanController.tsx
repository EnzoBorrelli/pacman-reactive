import { useEffect, useState } from "react";
import Pacman from "../sprites/pacman";
import { setPacmanState,setPacmanPosition,setPacmanSize,setPacmanDirection } from "~/store/pacmanSlice";
import SoundPlayer from "../utils/soundPlayer";
import CheckCollision from "../utils/checkCollision";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store";
import { PacState } from "../enums/pacman";
import { Direction } from "../enums/global";

export default function PacmanController({ map }: { map: string }) {
  const dispatch = useDispatch()
  const pacman = useSelector((state: RootState) => state.pacman);
  const {tiles, size} = useSelector((state: RootState) => state.map);
  const [animation, setAnimation] = useState("");
  const [keyState, setKeyState] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  //**change pacman size depending on the map
  switch (map) {
    case "challenge":
      setPacmanSize(16);
      break;
    case "classic":
      setPacmanSize(32);
      break;
    case "small":
      setPacmanSize(48);
      break;
    default:
      setPacmanSize(48);
      break;
  }
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
        SoundPlayer({folder:"gameplay",audio:"death"})
        break;
      default:
        setAnimation("");
        break;
    }
  }, [pacman.state]);

  let speed;
  const boost = pacman.state === "power" ? 1.5 : 1;
  //**change speed based on the map
  switch (map) {
    case "challenge":
      speed = Math.round(4 * boost);
      break;
    case "classic":
      speed = Math.round(8 * boost);
      break;
    case "small":
      speed = Math.round(12 * boost);
      break;
    default:
      speed = Math.round(12 * boost);
      break;
  }

  //** Handle keydown and keyup events
  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      switch (e.key) {
        case "q":
          setPacmanState(PacState.dead);
          break;
        case "ArrowUp":
          setKeyState((prev) => ({
            ...prev,
            up: true,
            left: false,
            right: false,
          }));
          break;
        case "ArrowDown":
          setKeyState((prev) => ({
            ...prev,
            down: true,
            left: false,
            right: false,
          }));
          break;
        case "ArrowLeft":
          setKeyState((prev) => ({
            ...prev,
            left: true,
            up: false,
            down: false,
          }));
          break;
        case "ArrowRight":
          setKeyState((prev) => ({
            ...prev,
            right: true,
            up: false,
            down: false,
          }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e: { key: string; }) => {
      switch (e.key) {
        case "q":
          setPacmanState(PacState.dead);
          break;
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
    if (!keyState.up && !keyState.down && !keyState.left && !keyState.right) {
      if (pacman.state !== PacState.idle && pacman.state !== PacState.dead) setPacmanState(PacState.idle); // Evita renders innecesarios
    } else {
      if (pacman.state !== PacState.chop) setPacmanState(PacState.chop); // Solo cambia si es diferente
    }
  }, [keyState, pacman.state]);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      let newX = pacman.position.x;
      let newY = pacman.position.y;

      if (keyState.up) {
        newY -= speed;
        setPacmanDirection(Direction.up);
      } else if (keyState.down) {
        newY += speed;
        setPacmanDirection(Direction.down);
      } else if (keyState.left) {
        newX -= speed;
        setPacmanDirection(Direction.left);
      } else if (keyState.right) {
        newX += speed;
        setPacmanDirection(Direction.right);
      }

      const newPos = { x: newX, y: newY };
      const isColliding = tiles.some((part: any) =>
        CheckCollision({objectA:newPos, sizeA:pacman.size, objectB:part.position, sizeB:size})
      );

      if (!isColliding) {
        dispatch(setPacmanPosition(newPos)); // ✅ Redux updates the state
      }
    }, 16);

    return () => clearInterval(moveInterval);
  }, [dispatch, keyState, speed, tiles, pacman.size, size, pacman.position, pacman.direction]);

  return (
    <span
      style={{
        position: "absolute",
        top: `${pacman.position.y}px`,
        left: `${pacman.position.x}px`,
      }}
    >
      <Pacman size={pacman.size} direction={pacman.direction} animation={animation} />
    </span>
  );
}
