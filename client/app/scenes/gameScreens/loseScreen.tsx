import { useSelector } from "react-redux";
import Score from "~/components/ui/score";
import ScreenSign from "~/components/ui/screenSign";
import soundPlayer from "~/components/utils/soundPlayer";
import { RootState } from "~/store";

export default function LoseScreen() {
  const game = useSelector((state: RootState) => state.game);

  return (
    <main className="flex flex-col items-center w-full p-4 pt-20 h-wull text-white">
      <ScreenSign level={game.level + 1} isLose={true} />
      <Score
        score={game.score}
        top="150px"
        left="32%"
        isGlitched={game.level === 255}
      />

      <button
        onMouseEnter={() =>
          soundPlayer.PlaySound({ folder: "ui", audio: "hover" })
        }
        className="mt-20 text-lg group bg-slate-800 py-1 px-4 flex items-center gap-4 ring-2 ring-slate-500 hover:bg-red-800 hover:ring-red-500 transition-colors duration-100"
        onClick={() => window.location.reload()}
      >
        Restart Game{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="inline-block transition-transform duration-100 group-hover:animate-spin"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
        </svg>
      </button>
    </main>
  );
}
