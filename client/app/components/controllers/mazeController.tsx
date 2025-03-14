import { useEffect } from "react";
import TileController from "./tileController";
import { classicMap } from "../maps/classic";
import { smallMap } from "../maps/small";
import { setMapTiles,setTileSize } from "~/store/mapSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/store";

export default function MazeController({ map }:{map:string}) {
  const {tiles, size} = useSelector((state: RootState) => state.map);
  const dispatch = useDispatch();
  useEffect(() => {
    switch (map) {
      case "challenge":
        setMapTiles(classicMap);
        break;
      case "classic":
        setMapTiles(classicMap);
        break;
      case "small":
        setMapTiles(smallMap);
        break;
      default:
        setMapTiles(classicMap);
        break;
    }
  }
  , [map]); // Se ejecuta solo cuando cambia `map`

  switch (map) {
    case "challenge":
      setTileSize(8);
      break;
    case "classic":
      setTileSize(16);
      break;
    case "small":
      setTileSize(24);
      break;
    default:
      setTileSize(16);
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
