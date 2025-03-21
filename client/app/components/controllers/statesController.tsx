import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { GameStates } from "../enums/game";
import GameController from "./gameController";
import StartScreen from "../../scenes/gameScreens/startScreen";
import LoseScreen from "../../scenes/gameScreens/loseScreen";
import WinScreen from "../../scenes/gameScreens/winScreen";
import { useEffect } from "react";
import { setGameHighScore } from "~/store/gameSlice";

export default function StatesController() {
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    if (game.state === GameStates.win || game.state === GameStates.lose) {
      if (game.score > game.highScore) {
        dispatch(setGameHighScore(game.score));
      }
    }
  }, [game.state, dispatch, game.score, game.highScore]);
  switch (game.state) {
    case GameStates.start:
      return <StartScreen />;
    case GameStates.playing:
      return <GameController />;
    case GameStates.lose:
      return <LoseScreen />;
    case GameStates.win:
      return <WinScreen />;
    default:
      // Handle unexpected screen values
      console.warn(`Unexpected gameState: ${game.state}`);
      return null;
  }
}
