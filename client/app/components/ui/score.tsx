import { useEffect, useState } from "react";
import { scoreColors } from "../enums/game";
import soundPlayer from "../utils/soundPlayer";

export default function Score({ score }: { score: number }) {
  const [color, setColor] = useState(scoreColors.common);

  useEffect(() => {
    if (
      score === 1000 ||
      score === 2000 ||
      score === 5000 ||
      score === 10000 ||
      score === 20000
    ) {
      soundPlayer.PlaySound({
        folder: "gameplay",
        audio: "eat_ghost",
        loop: false,
      });
    }

    if (score >= 20000) {
      setColor(scoreColors.myth);
    } else if (score >= 10000) {
      setColor(scoreColors.legend);
    } else if (score >= 5000) {
      setColor(scoreColors.epic);
    } else if (score >= 2000) {
      setColor(scoreColors.rare);
    } else if (score >= 1000) {
      setColor(scoreColors.uncommon);
    } else {
      setColor(scoreColors.common);
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
