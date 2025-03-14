import type { MetaFunction } from "@remix-run/node";
import Logo from "~/components/ui/logo";

export const meta: MetaFunction = () => {
  return [
    { title: "Pacman Reactive Multiplayer" },
    { name: "description", content: "Welcome to pacman reactive multiplayer" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col items-center w-full p-4 h-dvh bg-slate-950">
      <Logo/>
      <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-bold tracking-wider text-center text-orange-300">
        <li className="flex items-center justify-center gap-4 group">
          <div className="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <button
            //onMouseEnter={() => SoundPlayer("ui", "hover")}
            //onClick={() => useBtn("play")}
            className=" group-hover:text-yellow-300"
          >
            Play
          </button>
        </li>
        <li className="flex items-center justify-center gap-4 group">
          <div className="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <button
            //onMouseEnter={() => SoundPlayer("ui", "hover")}
            //onClick={() => useBtn("sprites")}
            className=" group-hover:text-yellow-300"
          >
            Extras
          </button>
        </li>
        <li className="flex items-center justify-center gap-4 group">
          <div className="hidden group-hover:block w-3 h-3 -rotate-[135deg] border-b-4 border-l-4 border-transparent border-b-slate-50 border-l-slate-50"></div>
          <button
            //onMouseEnter={() => SoundPlayer("ui", "hover")}
           // onClick={() => useBtn("")}
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
