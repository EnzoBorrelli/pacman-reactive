import { useEffect } from "react";
import TileController from "./tileController";
import { classicMap } from "../maps/classic";
import { smallMap } from "../maps/small";
import { setMapTiles, setTileSize } from "~/store/mapSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/store";

export default function MazeController({ map }: { map: string }) {
  const { tiles, size } = useSelector((state: RootState) => state.map);
  const dispatch = useDispatch();
  useEffect(() => {
    switch (map) {
      case "challenge":
        dispatch(setMapTiles(classicMap));
        break;
      case "classic":
        dispatch(setMapTiles(classicMap));
        break;
      case "small":
        dispatch(setMapTiles(smallMap));
        break;
      default:
        dispatch(setMapTiles(classicMap));
        break;
    }
  }, [map]); // Se ejecuta solo cuando cambia `map`

  switch (map) {
    case "challenge":
      dispatch(setTileSize(8));
      break;
    case "classic":
      dispatch(setTileSize(16));
      break;
    case "small":
      dispatch(setTileSize(24));
      break;
    default:
      dispatch(setTileSize(16));
      break;
  }

  return (
    <>
      {tiles.map((part, index) => (
        <TileController
          key={index}
          position={part.position}
          type={part.type}
          size={size}
          rotation={part.direction}
          isFlip={part.flip!}
        />
      ))}
    </>
  );
}
