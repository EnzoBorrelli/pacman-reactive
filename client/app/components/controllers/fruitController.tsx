import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import Fruit from "../sprites/fruit";
import { pacmanInitialPos } from "../enums/maps";
import { Scenes } from "../enums/scene";
import { useEffect, useRef, useState } from "react";
import CheckCollision from "../utils/checkCollision";
import { setGameScore } from "~/store/gameSlice";
import SoundPlayer from "../utils/soundPlayer";

const fruitScores = [100, 300, 500, 700, 1000, 2000, 3000, 5000];

export default function FruitController() {
  const size = useSelector((state: RootState) => state.map.tileSize);
  const { scene } = useSelector((state: RootState) => state.scene);
  const game = useSelector((state: RootState) => state.game);
  const pacman = useSelector((state: RootState) => state.pacman);
  const dispatch = useDispatch();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [eaten, setEaten] = useState(false);
  const [dotThreshold, setDotThreshold] = useState([40, 140]);

  const currentLevel = useRef(game.level);

  const fruitId = game.level > 7 ? 8 : game.level + 1; // 1-8

  useEffect(() => {
    switch (scene) {
      case Scenes.challengeMap:
        setPosition(pacmanInitialPos.challengeMap);
        setDotThreshold([100, 200]);
        break;
      case Scenes.classicMap:
        setPosition(pacmanInitialPos.classicMap);
        setDotThreshold([70, 170]);
        break;
      case Scenes.smallMap:
        setPosition(pacmanInitialPos.smallMap);
        setDotThreshold([40, 140]);
        break;
      default:
        setPosition(pacmanInitialPos.smallMap);
        setDotThreshold([40, 140]);
        break;
    }
  }, [scene]);

  useEffect(() => {
    if (
      (game.dotsEaten === dotThreshold[0] && !eaten && !isActive) ||
      (game.dotsEaten === dotThreshold[1] && !eaten && !isActive)
    ) {
      setIsActive(true);
    }
    const timer = setTimeout(() => {
      if (isActive && !eaten) {
        setIsActive(false);
      }
    }, 8000); // 10 seconds
    return () => {
      clearTimeout(timer);
    };
  }, [game.dotsEaten, eaten, isActive]);

  const isColliding = CheckCollision({
    objectA: pacman.position,
    sizeA: pacman.size,
    objectB: position,
    sizeB: size,
  });

  useEffect(() => {
    if (isColliding && isActive) {
      setIsActive(false);
      setEaten(true);
      SoundPlayer.PlaySound({
        folder: "gameplay",
        audio: "eat_fruit",
        loop: false,
      }); // chomp
      dispatch(setGameScore(game.score + fruitScores[game.level]));
    }
  }, [isColliding]);

  useEffect(() => {
    if (game.level > currentLevel.current) {
      setEaten(false);
      setIsActive(false);
    }
    currentLevel.current = game.level;
  }, [game.level]);

  return (
    <span
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: 1,
        opacity: isActive ? 1 : 0,
      }}
    >
      <Fruit size={size} ID={fruitId} />
    </span>
  );
}
