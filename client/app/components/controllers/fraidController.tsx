import * as blinkyActions from "~/store/ghostSlices/blinkySlice";
import * as inkyActions from "~/store/ghostSlices/inkySlice";
import * as pinkyActions from "~/store/ghostSlices/pinkySlice";
import * as clydeActions from "~/store/ghostSlices/clydeSlice";
import GhostController from "./ghostController";
import { useSelector } from "react-redux";
import { RootState } from "~/store";
import { GhostType } from "../enums/ghosts";

export default function FraidController() {
    const blinky = useSelector((state: RootState) => state.blinky);
    const inky = useSelector((state: RootState) => state.inky);
    const pinky = useSelector((state: RootState) => state.pinky);
    const clyde = useSelector((state: RootState) => state.clyde);
  return (
    <>
      <GhostController ghostActions={blinkyActions} ghost={blinky} type={GhostType.blinky} />
      <GhostController ghostActions={inkyActions} ghost={inky} type={GhostType.inky} />
      <GhostController ghostActions={pinkyActions} ghost={pinky} type={GhostType.pinky} />
      <GhostController ghostActions={clydeActions} ghost={clyde} type={GhostType.clyde} />
    </>
  );
}
