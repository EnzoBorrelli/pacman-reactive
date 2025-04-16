import { useDispatch } from "react-redux";
import { GameStates } from "~/components/enums/game";
import { setGameLevel, setGameState } from "~/store/gameSlice";

export default function GameStateSwitch({ isDebug }: { isDebug: boolean }) {
    const dispatch = useDispatch();

    const handleGameStateChange = (state: GameStates) => {
        dispatch(setGameState(state));
    }

  return (
    <div
      className={`${
        isDebug ? "flex" : "hidden"
      } text-white absolute top-0 left-0 p-10`}
    >
      <ul className="flex flex-col items-center gap-2 bg-slate-700 shadow-inner shadow-slate-600 p-4 rounded-md">
        <h4 className="blod">select state</h4>
        <li className="bg-slate-600 w-full pt-1 flex justify-center shadow-inner shadow-slate-500 hover:shadow-slate-800 cursor-pointer hover:text-yellow-200">
          <button onClick={()=>handleGameStateChange(GameStates.start)}>START</button>
        </li>
        <li className="bg-slate-600 w-full pt-1 flex justify-center shadow-inner shadow-slate-500 hover:shadow-slate-800 cursor-pointer hover:text-yellow-200">
          <button onClick={()=>handleGameStateChange(GameStates.playing)}>PLAY</button>
        </li>
        <li className="bg-slate-600 w-full pt-1 flex justify-center shadow-inner shadow-slate-500 hover:shadow-slate-800 cursor-pointer hover:text-yellow-200">
          <button onClick={()=>handleGameStateChange(GameStates.win)}>WIN</button>
        </li>
        <li className="bg-slate-600 w-full pt-1 flex justify-center shadow-inner shadow-slate-500 hover:shadow-slate-800 cursor-pointer hover:text-yellow-200">
          <button onClick={()=>handleGameStateChange(GameStates.lose)}>LOSE</button>
        </li>
        <li className="bg-slate-600 w-full pt-1 flex justify-center shadow-inner shadow-slate-500 hover:shadow-slate-800 cursor-pointer hover:text-yellow-200">
          <button onClick={()=>dispatch(setGameLevel(255))}>level-255</button>
        </li>
      </ul>
    </div>
  );
}
