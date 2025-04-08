import * as blinkyActions from "~/store/ghostSlices/blinkySlice";
import * as inkyActions from "~/store/ghostSlices/inkySlice";
import * as pinkyActions from "~/store/ghostSlices/pinkySlice";
import * as clydeActions from "~/store/ghostSlices/clydeSlice";
import GhostController from "./ghostController";
import { useSelector } from "react-redux";
import { RootState } from "~/store";
import { GhostState, GhostType } from "../enums/ghosts";
import SoundPlayer from "../utils/soundPlayer";
import { useEffect } from "react";

export default function FraidController() {
  const blinky = useSelector((state: RootState) => state.blinky);
  const inky = useSelector((state: RootState) => state.inky);
  const pinky = useSelector((state: RootState) => state.pinky);
  const clyde = useSelector((state: RootState) => state.clyde);
  const score = useSelector((state: RootState) => state.game.score);

  useEffect(() => {
    if (blinky.state !== GhostState.walking) return;
  
    const interval = setInterval(() => {
      let siren = "siren0";
  
      if (score >= 4000) {
        siren = "siren4";
      } else if (score >= 3000) {
        siren = "siren3";
      } else if (score >= 2000) {
        siren = "siren2";
      } else if (score >= 1000) {
        siren = "siren1";
      }
  
      SoundPlayer({ folder: "gameplay", audio: siren });
    }, 400);
  
    return () => clearInterval(interval);
  }, [blinky.state, score]);
  

  return (
    <>
      <GhostController
        ghostActions={blinkyActions}
        ghost={blinky}
        type={GhostType.blinky}
      />
      <GhostController
        ghostActions={inkyActions}
        ghost={inky}
        type={GhostType.inky}
      />
      <GhostController
        ghostActions={pinkyActions}
        ghost={pinky}
        type={GhostType.pinky}
      />
      <GhostController
        ghostActions={clydeActions}
        ghost={clyde}
        type={GhostType.clyde}
      />
    </>
  );
}
