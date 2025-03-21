import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameStates } from "~/components/enums/game";
import { Scenes } from "~/components/enums/scene";
import SceneDisplay from "~/components/sceneDisplay";
import Button from "~/components/ui/button";
import { RootState } from "~/store";
import { setGameState, setPreviousGameState } from "~/store/gameSlice";

export const meta: MetaFunction = () => {
  return [
    { title: "Pacman Reactive Multiplayer" },
    { name: "description", content: "Welcome to pacman reactive multiplayer" },
  ];
};

export default function Index() {
  const scene = useSelector((state: RootState) => state.scene.scene);
  const { highScore } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    if (scene === Scenes.mainMenu) {
      dispatch(setGameState(GameStates.start));
      dispatch(setPreviousGameState(GameStates.start));
    }
  }, [scene, dispatch]);
  return (
    <main className="flex flex-col items-center w-full p-4 bg-slate-950 h-dvh">
      <h3 className="mb-4 font-bold tracking-wider text-center text-md text-slate-300">
        HIGHSCORE: {highScore}
      </h3>
      <Button
        scene={Scenes.mainMenu}
        soundData={{ folder: "ui", audio: "menu" }}
        style={`${
          scene === Scenes.mainMenu ? "hidden" : "flex"
        } text-slate-300 bg-slate-800 ring-2 ring-slate-500 px-2 py-1 rounded-md`}
        label="Main Menu"
      />
      <SceneDisplay />
    </main>
  );
}
