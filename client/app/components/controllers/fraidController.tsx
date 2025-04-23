import * as blinkyActions from "~/store/ghostSlices/blinkySlice";
import * as inkyActions from "~/store/ghostSlices/inkySlice";
import * as pinkyActions from "~/store/ghostSlices/pinkySlice";
import * as clydeActions from "~/store/ghostSlices/clydeSlice";
import GhostController from "./ghostController";
import { useSelector } from "react-redux";
import { RootState } from "~/store";
import { GhostState, GhostType } from "../enums/ghosts";
import SoundPlayer from "../utils/soundPlayer";
import { useEffect, useRef } from "react";

export default function FraidController() {
  const blinky = useSelector((state: RootState) => state.blinky);
  const inky = useSelector((state: RootState) => state.inky);
  const pinky = useSelector((state: RootState) => state.pinky);
  const clyde = useSelector((state: RootState) => state.clyde);
  const dotsEaten = useSelector((state: RootState) => state.game.dotsEaten);
  const dotsLayout = useSelector((state: RootState) => state.map.dotsLayout);

  const currentSiren = useRef<Howl | null>(null);
  const currentSirenName = useRef<string>("");

  const dotsCount = (matrix: number[][]) => {
    let count = 0;
    for (const row of matrix) {
      for (const cell of row) {
        if (cell === 1 || cell === 2) count++;
      }
    }
    return count;
  };

  const totalDots = dotsCount(dotsLayout.layout);
  

  useEffect(() => {
    if (blinky.state !== GhostState.walking) {
      currentSiren.current?.stop();
      currentSiren.current = null;
      currentSirenName.current = "";
      return;
    }

    let siren = "siren0";
    if (dotsEaten > Math.floor(totalDots * 2.5)) siren = "siren4";
    else if (dotsEaten > Math.floor(totalDots * 1.7)) siren = "siren3";
    else if (dotsEaten > Math.floor(totalDots * 0.7)) siren = "siren2";
    else if (dotsEaten > Math.floor(totalDots * 0.3)) siren = "siren1";

    if (currentSirenName.current === siren) return;
    // Stop old siren
    currentSiren.current?.stop();

    // Play new siren and store it
    currentSiren.current = SoundPlayer.PlaySound({
      folder: "gameplay",
      audio: siren,
      loop: true,
      useCache: true,
    });

    currentSirenName.current = siren;
  }, [blinky.state, dotsEaten]);

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
