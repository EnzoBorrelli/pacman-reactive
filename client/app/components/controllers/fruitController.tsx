import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import Fruit from "../sprites/fruit";
import { pacmanInitialPos } from "../enums/maps";
import { Scenes } from "../enums/scene";
import { useEffect, useState } from "react";
import CheckCollision from "../utils/checkCollision";
import { setGameScore } from "~/store/gameSlice";
import SoundPlayer from "../utils/soundPlayer";

export default function FruitController() {
  const size = useSelector((state: RootState) => state.map.tileSize);
  const { scene } = useSelector((state: RootState) => state.scene);
  const game = useSelector((state: RootState) => state.game);
  const pacman = useSelector((state: RootState) => state.pacman);
  const dispatch = useDispatch();

  const [position,setPosition] = useState({x: 0, y: 0});
  const [isActive, setIsActive] = useState(false);
  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    switch (scene) {
      case Scenes.challengeMap:
        setPosition(pacmanInitialPos.challengeMap);
        break;
      case Scenes.classicMap:
        setPosition(pacmanInitialPos.classicMap);
        break;
      case Scenes.smallMap:
        setPosition(pacmanInitialPos.smallMap);
        break;
      default:
        setPosition(pacmanInitialPos.smallMap);
        break;
    }
  }, [scene]);

  useEffect(() => {
    if (isActive) return;
    if (game.dotsEaten > 40 && !isFirst) {
      setIsActive(true);
      setIsFirst(true);
    }
    if (game.dotsEaten > 140 && isFirst) {
      setIsActive(true);
    }
  }, [game.dotsEaten, isFirst]);

  const isColliding = CheckCollision({
    objectA: pacman.position,
    sizeA: pacman.size,
    objectB: position,
    sizeB: size,
  });

  useEffect(() => {
    if (isColliding && isActive) {
      setIsActive(false);
      SoundPlayer.PlaySound({
        folder: "gameplay",
        audio: "eat_fruit",
        loop: false,
      }); // chomp
      dispatch(setGameScore(game.score + 50));
    }
  }, [isColliding]);

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
      <Fruit size={size} ID={1} />
    </span>
  );
}
