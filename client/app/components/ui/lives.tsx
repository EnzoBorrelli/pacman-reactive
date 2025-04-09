import { useSelector } from "react-redux";
import { RootState } from "~/store";

export default function Lives() {
  const lives = useSelector((state: RootState) => state.game.lives);

  return (
    <div
      className="text-white text-lg flex items-center"
      style={{
        position: "absolute",
        top: "-30px",
        right: "20px",
        zIndex: 100,
      }}
    >
      lives:
      <div className="flex gap-1 items-center">
        {Array.from({ length: lives }).map((_, index) => (
          <img
            key={index}
            style={{ width: 24, height: 24 }}
            src="/assets/sprites/pacman/phase_1.png"
            alt="pacman"
          />
        ))}
      </div>
    </div>
  );
}
