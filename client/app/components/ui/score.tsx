import { useEffect, useState } from "react";
import { scoreColors } from "../enums/game";
import soundPlayer from "../utils/soundPlayer";

export default function Score({ score }: { score: number }) {
  const [color, setColor] = useState(scoreColors.common);

  function UpgradeTier(scoreColor: scoreColors) {
    setColor(scoreColor);
    soundPlayer.PlaySound({
      folder: "gameplay",
      audio: "eat_ghost",
      loop: false,
    });
  }

  useEffect(() => {
    switch (score) {
      case 0:
        setColor(scoreColors.common);
        break;
      case 200:
        UpgradeTier(scoreColors.uncommon);
        break;
      case 500:
        UpgradeTier(scoreColors.rare);
        break;
      case 1000:
        UpgradeTier(scoreColors.epic);
        break;
      case 2000:
        UpgradeTier(scoreColors.legend);
        break;
      case 5000:
        UpgradeTier(scoreColors.myth);
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
