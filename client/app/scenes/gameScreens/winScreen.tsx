import { useDispatch, useSelector } from "react-redux";
import { GameStates } from "~/components/enums/game";
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
    <div className="text-white">
      <h1>YOU WON!</h1>
      <h2>Level {game.level}</h2>
      <h2>Score: {game.score}</h2>
      <button onClick={handleNextLevel}>next level</button>
    </div>
  );
}
