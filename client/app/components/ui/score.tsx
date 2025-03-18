import { useEffect, useState } from "react";
import { scoreColors } from "../enums/game";
import SoundPlayer from "../utils/soundPlayer";

export default function Score({ score }: { score: number }) {
  const [color, setColor] = useState(scoreColors.common);

  useEffect(() => {
    switch (score) {
      case 0:
        setColor(scoreColors.common);
        break;
      case 200:
        setColor(scoreColors.uncommon);
        SoundPlayer({ folder: "gameplay", audio: "eat_ghost" });
        break;
      case 500:
        setColor(scoreColors.rare);
        SoundPlayer({ folder: "gameplay", audio: "eat_ghost" });
        break;
      case 1000:
        setColor(scoreColors.epic);
        SoundPlayer({ folder: "gameplay", audio: "eat_ghost" });
        break;
      case 2000:
        setColor(scoreColors.legend);
        SoundPlayer({ folder: "gameplay", audio: "eat_ghost" });
        break;
      case 5000:
        setColor(scoreColors.myth);
        SoundPlayer({ folder: "gameplay", audio: "eat_ghost" });
        break;
      default:
        break;
    }
  }, [score]);
  return (
    <div
      className={`${color} text-xl`}
      style={{
        position: "absolute",
        top: "-30px",
        left: "20px",
        zIndex: 100,
      }}
    >
      score:{score}
    </div>
  );
}
