import React, { useEffect, useState } from "react";
import Pacman from "../sprites/pacman";
import { usePacman } from "../../../providers/pacmanProvider";
import SoundPlayer from "../utils/soundPlayer";
import { useMap } from "../../../providers/mapProvider";
import CheckCollision from "../utils/checkCollision";

export default function PacmanController({ map }) {
  const { position, setPosition, state, setState, pacSize, setPacSize } =
    usePacman();
  const { partsAttributes, tileSize } = useMap();
  const [animation, setAnimation] = useState("");
  const [direction, setDirection] = useState("right");
  const [keyState, setKeyState] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  //**change pacman size depending on the map
  switch (map) {
    case "challenge":
      setPacSize(16);
      break;
    case "classic":
      setPacSize(32);
      break;
    case "small":
      setPacSize(48);
      break;
    default:
      setPacSize(48);
      break;
  }
  //**change animation depending on the state
  useEffect(() => {
    switch (state) {
      case "stop":
        setAnimation("");
        break;
      case "move":
        setAnimation("chop");
        break;
      case "powered":
        setAnimation("power");
        break;
      case "die":
        setAnimation("dead");
        SoundPlayer("gameplay", "death");
        break;
      default:
        setAnimation("");
        break;
    }
  }, [state]);

  let speed;
  const boost = state === "powered" ? 1.5 : 1;
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
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "q":
          setState("die");
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

    const handleKeyUp = (e) => {
      switch (e.key) {
        case "q":
          setState("die");
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
      if (state !== "stop" && state !== "die") setState("stop"); // Evita renders innecesarios
    } else {
      if (state !== "move") setState("move"); // Solo cambia si es diferente
    }
  }, [keyState, state]);

  //** moves pacman
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (keyState.up) {
          newY -= speed;
          setDirection("up");
        } else if (keyState.down) {
          newY += speed;
          setDirection("down");
        } else if (keyState.left) {
          newX -= speed;
          setDirection("left");
        } else if (keyState.right) {
          newX += speed;
          setDirection("right");
        }

        const newPos = { x: newX, y: newY };
        const isColliding = partsAttributes.some((part) =>
          CheckCollision(newPos, pacSize, part.position, tileSize)
        );

        return isColliding ? prev : newPos; // Regresa la posición anterior si hay colisión
      });
    }, 16);

    return () => clearInterval(moveInterval);
  }, [keyState, speed, partsAttributes, pacSize, tileSize]); // Dependencias optimizadas

  return (
    <span
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    > 
      <Pacman size={pacSize} direction={direction} animation={animation} />
    </span>
  );
}
