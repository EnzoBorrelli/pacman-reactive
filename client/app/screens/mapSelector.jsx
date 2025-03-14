import React from "react";
import { useScreen } from "../../providers/screenProvider";
import SoundPlayer from "../components/utils/soundPlayer";

export default function MapSelector() {
  const { setScreen } = useScreen();

  function useBtn(screen) {
    setScreen(screen);
    SoundPlayer("ui", "select");
  }

  return (
    <main className="flex flex-col items-center w-full p-4 h-dvh">
    <h2 className="m-10 text-xl font-bold tracking-wider text-center text-slate-300">
        Select a Map!
      </h2>
    <ul className="flex flex-col items-center justify-center gap-10 mt-10 text-lg font-bold tracking-wider text-center text-orange-300">
      <li className="flex items-center justify-center gap-4 group">
        <div class="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
        <button
          onMouseEnter={() => SoundPlayer("ui", "hover")}
          onClick={() => useBtn("small")}
          className=" group-hover:text-yellow-300"
        >
          Small
        </button>
      </li>
      <li className="flex items-center justify-center gap-4 group">
        <div class="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
        <button
          onMouseEnter={() => SoundPlayer("ui", "hover")}
          onClick={() => useBtn("classic")}
          className=" group-hover:text-yellow-300"
        >
          Classic
        </button>
      </li>
      <li className="flex items-center justify-center gap-4 group">
        <div class="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
        <button
          onMouseEnter={() => SoundPlayer("ui", "hover")}
          onClick={() => useBtn("challenge")}
          className=" group-hover:text-yellow-300"
        >
          Challenge
        </button>
      </li>
    </ul>
    </main>
  );
}
