import Logo from "~/components/ui/logo";
import SoundPlayer from "../components/utils/soundPlayer";
import ClickBtn from "~/components/ui/button";
import { Scenes } from "~/components/enums/scene";
import Button from "~/components/ui/button";

export default function MainMenu() {
  return (
    <main className="flex flex-col items-center w-full p-4 h-dvh">
      <Logo />
      <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-bold tracking-wider text-center text-orange-300">
        <li className="flex items-center justify-center gap-4 group">
          <div className="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <Button
            scene={Scenes.mapSelector}
            soundData={{ folder: "ui", audio: "select" }}
            style="group-hover:text-yellow-300"
            label="Play"
          />
        </li>
        <li className="flex items-center justify-center gap-4 group">
          <div className="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <Button
            scene={Scenes.sprites}
            soundData={{ folder: "ui", audio: "select" }}
            style="group-hover:text-yellow-300"
            label="Extras"
          />
        </li>
        <li className="flex items-center justify-center gap-4 group">
          <div className="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <Button
            scene={Scenes.mainMenu}
            soundData={{ folder: "ui", audio: "select" }}
            style="group-hover:text-yellow-300"
            label="About"
          />
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
            href="https://endykaishi-web.vercel.app/
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
