import { useDispatch, useSelector } from "react-redux";
import { GameStates } from "~/components/enums/game";
import GlitchedText from "~/components/ui/glitchedText";
import Lives from "~/components/ui/lives";
import Score from "~/components/ui/score";
import ScreenSign from "~/components/ui/screenSign";
import soundPlayer from "~/components/utils/soundPlayer";
import { RootState } from "~/store";
import {
  setGameLevel,
  setGameState,
  setPreviousGameState,
} from "~/store/gameSlice";

export default function WinScreen() {
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleNextLevel = () => {
    dispatch(setPreviousGameState(GameStates.nextLevel));
    dispatch(setGameState(GameStates.playing));
    dispatch(setGameLevel(game.level + 1));
  };

  return (
    <main className="flex flex-col items-center w-full p-4 pt-20 h-wull text-white">
      <ScreenSign level={game.level + 1} />
      <Score score={game.score} top="150px" left="32%" isGlitched={game.level===255} />
      <Lives top="150px" right="32%" isGlitched={game.level===255} />
      {game.level === 255 ? (
        <button
          onMouseEnter={() =>
            soundPlayer.PlaySound({ folder: "ui", audio: "hover" })
          }
          className="mt-20 text-lg flex items-center"
          onClick={() => window.location.reload()}
        >
          <GlitchedText text="ţ̸̪̹̺̙͔͉̻̲̟̱̥̼̳͔̏̄͑̋̍̅̒̀̄̊͠͝ơ̵͓͎͉̝̭̭̣̠̅͋̈́̕ͅṈ̷̨̹̱̬̪͇͙̳̆̂͒̔͆̓ȇ̷̡̢̛̦̩͚̓̒̒̔͗̍̌͜x̴̛͇̳̖͑̽̅͑̔̐̽͘̕͝t̸̳͙͕̯̖̼͇̰͛̏̊͆̾Ḻ̵̨̡̨̗̗͔̹͚̱͂̊͋̎̈́̎̓̏̐͘ͅë̶̖̘̭̫́͑̓̈́͠v̷̨̜̜́͊̿̓́͝ͅe̸̘̱̞̐͛̎͋͌̕͝ļ̷̨̧̛̙̗̳̠̲͈̲̼̺̙̭͛̊̀͛̍̔͌͠ͅ" />
        </button>
      ) : (
        <button
          onMouseEnter={() =>
            soundPlayer.PlaySound({ folder: "ui", audio: "hover" })
          }
          className="mt-20 text-lg group bg-slate-800 py-1 px-4 rounded-r-xl flex items-center gap-4 ring-2 ring-slate-500"
          onClick={handleNextLevel}
        >
          TO NEXT LEVEL{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-2">
            --&gt;
          </span>
        </button>
      )}
    </main>
  );
}
