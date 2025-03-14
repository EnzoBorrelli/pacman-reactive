import React from "react";
import { useScreen } from "../../providers/screenProvider";
import SoundPlayer from "../components/utils/soundPlayer";

export default function MainMenu() {
  const { setScreen } = useScreen();

  function useBtn(screen) {
    setScreen(screen);
    SoundPlayer("ui", "select");
  }
  return (
    <main className="flex flex-col items-center w-full p-4 h-dvh">
      <div className="relative w-[580px] bg-red-600 rounded-lg h-28">
        <div className="absolute w-[96%] top-3 left-3 h-[5.5rem] bg-orange-500 rounded-md ring-4 ring-slate-950"></div>
        <h2 className="absolute text-3xl font-bold tracking-widest text-center text-purple-700 text-stroke-1 top-12 left-12">
          PACMAN REACTIVE
        </h2>
        <h2 className="absolute text-3xl font-bold tracking-widest text-center text-slate-100 text-stroke-2 top-9 left-10">
          PACMAN REACTIVE
        </h2>
        <h2 className="absolute text-3xl font-bold tracking-widest text-center text-yellow-400 text-stroke-3 top-10 left-11">
          PACMAN REACTIVE
        </h2>
      </div>
      <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-bold tracking-wider text-center text-orange-300">
        <li className="flex items-center justify-center gap-4 group">
          <div class="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <button
            onMouseEnter={() => SoundPlayer("ui", "hover")}
            onClick={() => useBtn("play")}
            className=" group-hover:text-yellow-300"
          >
            Play
          </button>
        </li>
        <li className="flex items-center justify-center gap-4 group">
          <div class="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <button
            onMouseEnter={() => SoundPlayer("ui", "hover")}
            onClick={() => useBtn("sprites")}
            className=" group-hover:text-yellow-300"
          >
            Extras
          </button>
        </li>
        <li className="flex items-center justify-center gap-4 group">
          <div class="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <button
            onMouseEnter={() => SoundPlayer("ui", "hover")}
            onClick={() => useBtn("")}
            className=" group-hover:text-yellow-300"
          >
            About
          </button>
        </li>
      </ul>

      <footer className="flex flex-col items-center gap-4 mt-20 font-bold tracking-wider text-center text-md text-slate-300">
        <a
          className="text-red-600 hover:text-yellow-600"
          href="https://www.namco.co.jp/"
          target="_blank"
          rel="noreferrer"
        >
          NAMCOT
        </a>
        <p>
          © 1980 1990 NAMCO LTD | ALL RIGHTS RESERVED | CODED BY{" "}
          <a
            className="text-teal-600 hover:text-yellow-600"
            href="https://enzo-borrelli-web.vercel.app/
            "
            target="_blank"
            rel="noreferrer"
          >
            ENDY KAISHI®
          </a>
        </p>
      </footer>
    </main>
  );
}
