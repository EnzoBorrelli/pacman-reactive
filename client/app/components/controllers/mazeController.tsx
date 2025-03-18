import { useEffect } from "react";
import TileController from "./tileController";
import { classicMap } from "../maps/classic";
import { smallMap } from "../maps/small";
import { setMapTiles, setTileSize } from "~/store/mapSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/store";
import { Scenes } from "../enums/scene";

export default function MazeController() {
  const { tiles, tileSize } = useSelector((state: RootState) => state.map);
  const {scene} = useSelector((state: RootState) => state.scene);

  const dispatch = useDispatch();
  useEffect(() => {
    switch (scene) {
      case Scenes.challengeMap:
        dispatch(setMapTiles(classicMap));
        dispatch(setTileSize(8));
        break;
      case Scenes.classicMap:
        dispatch(setMapTiles(classicMap));
        dispatch(setTileSize(16));
        break;
      case Scenes.smallMap:
        dispatch(setMapTiles(smallMap));
        dispatch(setTileSize(24));
        break;
      default:
        dispatch(setMapTiles(classicMap));
        dispatch(setTileSize(16));
        break;
    }
  }, [scene, dispatch]); // Se ejecuta solo cuando cambia `map`

  return (
    <>
      {tiles.map((part, index) => (
        <TileController
          key={index}
          position={part.position}
          type={part.type}
          size={tileSize}
          rotation={part.direction}
          isFlip={part.flip!}
        />
      ))}
    </>
  );
}
