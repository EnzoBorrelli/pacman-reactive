import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/store";
import { Scenes } from "../enums/scene";
import { selectAllEatenDots, setMapDots, setTileSize } from "~/store/mapSlice";
import DotController from "./dotController";
import { classicDotsMatrix } from "../maps/dotLayout/classic";
import { smallDotsMatrix } from "../maps/dotLayout/small";
import { setGameState, setPreviousGameState } from "~/store/gameSlice";
import { GameStates } from "../enums/game";

export default function ObjectsController() {
  const { tileSize, dotsLayout } = useSelector((state: RootState) => state.map);
  const { scene } = useSelector((state: RootState) => state.scene);
  const { state, previousState } = useSelector(
    (state: RootState) => state.game
  );
  const allEatenDots = useSelector(selectAllEatenDots);
  const dispatch = useDispatch();

  const convertMatrixToDots = (matrix: number[][], tileSize: number) =>
    matrix.flatMap((row, rowIndex) =>
      row
        .map((cell, colIndex) => {
          if (cell === 0) return null;
          return {
            id: `${rowIndex}-${colIndex}`, // ✅ Unique, stable ID
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

  useEffect(() => {
    let selectedMatrix = classicDotsMatrix;
    let selectedTileSize = 16;
    if (state === GameStates.playing && previousState === GameStates.start) {
      switch (scene) {
        case Scenes.smallMap:
          selectedMatrix = smallDotsMatrix;
          selectedTileSize = 24;
          break;
      }

      dispatch(setMapDots({ layout: selectedMatrix }));
      dispatch(setTileSize(selectedTileSize));
      dispatch(setPreviousGameState(GameStates.playing));
    }
  }, [scene, dispatch, state, previousState]);

  // ✅ Use useMemo to avoid unnecessary re-renders
  const convertedDots = useMemo(
    () => convertMatrixToDots(dotsLayout.layout, tileSize),
    [dotsLayout.layout, tileSize]
  );

  useEffect(() => {
    if (state === GameStates.playing && previousState === GameStates.playing) {
      if (allEatenDots) {
        dispatch(setGameState(GameStates.win));
      }
    }
  }, [allEatenDots, dispatch, state, previousState]);

  return (
    <>
      {convertedDots.map((dot) => (
        <DotController
          key={dot.id} // ✅ Stable key prevents remounting
          position={dot.position}
          size={tileSize}
          power={dot.power}
        />
      ))}
    </>
  );
}
