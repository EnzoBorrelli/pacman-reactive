import StatesController from "~/components/controllers/statesController";
import PacmanDebug from "~/components/utils/debug/pacmanDebug";

export default function SmallMap() {
  return (
    <main className="flex flex-col items-center w-full p-4 pt-6 h-dvh">
      <div className="flex flex-row">
        <PacmanDebug isDebug={false} />
        <StatesController/>
      </div>
    </main>
  );
}
