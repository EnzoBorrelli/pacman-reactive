import { useEffect } from "react";
import { useMap } from "../../../providers/mapProvider";
import TileController from "./tileController";
import { classicMap } from "../maps/classic";
import { smallMap } from "../maps/small";

export default function MazeController({ map }:{map:string}) {
  const { partsAttributes,setPartsAttributes, tileSize, setTileSize } = useMap();
  useEffect(() => {
    switch (map) {
      case "challenge":
        setPartsAttributes([
          { type: "simpleWall", rotation: "right", position: { x: 500, y: 500 } },
        ]);
        break;
      case "classic":
        setPartsAttributes(classicMap);
        break;
      case "small":
        setPartsAttributes(smallMap);
        break;
      default:
        setPartsAttributes(classicMap);
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
      {partsAttributes.map((part, index) => (
        <TileController
          key={index}
          position={part.position}
          type={part.type}
          size={tileSize}
          rotation={part.rotation}
          isFlip={part.isFlip}
        />
      ))}
    </>
  );
}
