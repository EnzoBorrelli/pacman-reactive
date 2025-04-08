import { useDispatch } from "react-redux";
import { GameStates } from "~/components/enums/game";
import CharactersDisplay from "~/components/ui/startScreen/charactersDisplay";
import SoundPlayer from "~/components/utils/soundPlayer";
import { setGameState } from "~/store/gameSlice";

export default function StartScreen() {
  const dispatch = useDispatch();

  const Click = () => {
    dispatch(setGameState(GameStates.playing));
    SoundPlayer.PlaySound({ folder: "ui", audio: "select" });
  };
  return (
    <div>
      <CharactersDisplay />
      <button
        onMouseEnter={() => SoundPlayer.PlaySound({ folder: "ui", audio: "hover" })}
        onClick={Click}
        className="text-white mt-20 text-2xl hover:text-yellow-400"
      >
        HI, Start this game
      </button>
    </div>
  );
}
