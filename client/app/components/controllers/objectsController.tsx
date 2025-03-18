import { useEffect } from "react";
import { Dot, setMapDots, setTileSize } from "~/store/mapSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/store";
import { Scenes } from "../enums/scene";
import DotController from "./dotController";
import { classicDotsMatrix } from "../maps/dotLayout/classic";
import { smallDotsMatrix } from "../maps/dotLayout/small";

export default function ObjectsController() {
  const { tileSize, dots } = useSelector((state: RootState) => state.map);
  const { scene } = useSelector((state: RootState) => state.scene);

  const dispatch = useDispatch();

  // Función para convertir matriz en coordenadas absolutas
  const convertMatrixToDots = (matrix: number[][], tileSize: number): Dot[] => {
    return matrix.flatMap(
      (row, rowIndex) =>
        row
          .map((cell, colIndex) => {
            if (cell === 0) return null; // Espacio vacío, sin dot
            return {
              power: cell === 2,
              position: {
                x: (colIndex + 1) * tileSize,
                y: (rowIndex + 1) * tileSize,
              },
            };
          })
          .filter((dot): dot is Dot => dot !== null) // Filtra `null` dentro del `.map`
    );
  };

  useEffect(() => {
    let selectedMatrix;
    let selectedTileSize;

    switch (scene) {
      case Scenes.challengeMap:
        selectedMatrix = classicDotsMatrix;
        selectedTileSize = 8;
        break;
      case Scenes.classicMap:
        selectedMatrix = classicDotsMatrix;
        selectedTileSize = 16;
        break;
      case Scenes.smallMap:
        selectedMatrix = smallDotsMatrix;
        selectedTileSize = 24;
        break;
      default:
        selectedMatrix = classicDotsMatrix;
        selectedTileSize = 16;
        break;
    }

    const convertedDots = convertMatrixToDots(selectedMatrix, selectedTileSize);
    dispatch(setMapDots(convertedDots));
    dispatch(setTileSize(selectedTileSize));
  }, [scene, dispatch]);

  return (
    <>
      {dots.map((dot, index) => (
        <DotController
          key={index}
          position={dot.position}
          size={tileSize}
          power={dot.power}
        />
      ))}
    </>
  );
}
