import { useSelector } from "react-redux";
import { RootState } from "~/store";

export default function CollisionDebug({ isDebug }: { isDebug: boolean }) {
  const pacman = useSelector((state: RootState) => state.pacman);

  const CenterX = Math.round(pacman.position.x + pacman.size / 3);
  const CenterY = Math.round(pacman.position.y + pacman.size / 3);
  const Radius = pacman.size / 2;
  return (
    <div
      hidden={!isDebug}
      style={{
        position: "absolute",
        top: `${CenterY}px`,
        left: `${CenterX}px`,
        width: `${Radius}px`,
        height: `${Radius}px`,
        zIndex: 30,
      }}
      className="bg-green-600  ring-2 ring-white"
    ></div>
  );
}
