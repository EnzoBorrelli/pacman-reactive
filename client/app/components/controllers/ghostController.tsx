import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { GhostType } from "../enums/ghosts";
import Ghost from "../sprites/ghost";
import { useEffect } from "react";
import { Scenes } from "../enums/scene";
import {
  setGhostPosition,
  setGhostSize,
} from "~/store/ghostSlices/blinkySlice";
import { ghostInitialPos } from "../enums/maps";

export default function GhostController() {
  const blinky = useSelector((state: RootState) => state.blinky);
  const { scene } = useSelector((state: RootState) => state.scene);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (scene) {
      case Scenes.challengeMap:
        dispatch(setGhostSize(12));
        dispatch(setGhostPosition({ x: 24, y: 24 }));
        // setSpeed(Math.round(4 * boost));
        break;
      case Scenes.classicMap:
        dispatch(setGhostSize(24));
        dispatch(setGhostPosition({ x: 24, y: 24 }));
        //setSpeed(Math.round(8 * boost));
        break;
      case Scenes.smallMap:
        dispatch(setGhostSize(36));
        dispatch(setGhostPosition(ghostInitialPos.smallMap));
        //setSpeed(Math.round(12 * boost));
        break;
      default:
        dispatch(setGhostSize(36));
        dispatch(setGhostPosition(ghostInitialPos.smallMap));
        //setSpeed(Math.round(12 * boost));
        break;
    }
  }, [scene, dispatch]);
  return (
    <span
      style={{
        position: "absolute",
        top: `${blinky.position.y}px`,
        left: `${blinky.position.x}px`,
        zIndex: 3,
      }}
    >
      <Ghost
        size={blinky.size}
        type={GhostType.blinky}
        direction={blinky.direction}
        state={blinky.state}
      />
    </span>
  );
}
