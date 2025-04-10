import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/store";
import { Scenes } from "../enums/scene";
import { setMapDots, setTileSize } from "~/store/mapSlice";
import DotController from "./dotController";
import { classicDotsMatrix } from "../maps/dotLayout/classic";
import { smallDotsMatrix } from "../maps/dotLayout/small";
import { setGameDotsEaten, setGameState } from "~/store/gameSlice";
import { GameStates } from "../enums/game";
import { objectSize } from "../enums/global";

export default function ObjectsController() {
  const { tileSize, dotsLayout } = useSelector((state: RootState) => state.map);
  const { scene } = useSelector((state: RootState) => state.scene);
  const { state, previousState, dotsEaten } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();

  const [mapDotsCount, setMapDotCount] = useState(0);

  const convertMatrixToDots = (matrix: number[][], tileSize: number) =>
    matrix.flatMap((row, rowIndex) =>
      row
        .map((cell, colIndex) => {
          if (cell === 0) return null;
          return {
            id: `${rowIndex}-${colIndex}`,
            power: cell === 2,
            position: {
              x: (colIndex + 1) * tileSize,
              y: (rowIndex + 1) * tileSize,
            },
          };
        })
        .filter(
          (
            dot
          ): dot is {
            id: string;
            power: boolean;
            position: { x: number; y: number };
          } => dot !== null
        )
    );

  // Handle layout and tileSize setup on game start or next level
  useEffect(() => {
    if (
      state === GameStates.playing &&
      (previousState === GameStates.start ||
        previousState === GameStates.nextLevel)
    ) {
      dispatch(setGameDotsEaten(0));
      let selectedMatrix = classicDotsMatrix;
      let selectedTileSize = objectSize.classic;

      if (scene === Scenes.smallMap) {
        selectedMatrix = smallDotsMatrix;
        selectedTileSize = objectSize.small;
      }

      dispatch(setMapDots({ layout: selectedMatrix }));
      dispatch(setTileSize(selectedTileSize));
    }
  }, [scene, dispatch, state, previousState]);

  // Convert dot layout into a usable array
  const convertedDots = useMemo(
    () => convertMatrixToDots(dotsLayout.layout, tileSize),
    [dotsLayout.layout, tileSize]
  );

  // Layout readiness guard (useful for avoiding early collisions)
  const layoutReady = useMemo(() => {
    return dotsLayout.layout.length > 0 && tileSize > 0;
  }, [dotsLayout.layout, tileSize]);

  // Update dot count when layout changes
  useEffect(() => {
    if (layoutReady) {
      setMapDotCount(convertedDots.length);
      console.log("[Layout Ready] Dots count:", convertedDots.length);
      console.log("[Tile Size]:", tileSize);
    }
  }, [convertedDots, layoutReady, tileSize]);

  // Check win condition
  useEffect(() => {
    if (
      (state === GameStates.playing || state === GameStates.lostLife) &&
      mapDotsCount < 1 &&
      dotsEaten > 0
    ) {
      dispatch(setGameState(GameStates.win));
      dispatch(setGameDotsEaten(0));
    }
  }, [state, dotsEaten, mapDotsCount, dispatch]);

  if (!layoutReady) return null; // block rendering until ready

  return (
    <>
      {convertedDots.map((dot) => (
        <DotController
          key={dot.id}
          position={dot.position}
          size={tileSize}
          power={dot.power}
        />
      ))}
    </>
  );
}
