import { useSelector } from "react-redux";
import { RootState } from "~/store";
import { GhostType } from "../enums/ghosts";
import Ghost from "../sprites/ghost";

export default function GhostController() {
    const blinky = useSelector((state: RootState) => state.blinky);
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
