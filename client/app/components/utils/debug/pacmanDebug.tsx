import { useSelector } from 'react-redux';
import { RootState } from '~/store';

export default function PacmanDebug({isDebug}: {isDebug: boolean}) {
    const {position, state} = useSelector((state: RootState) => state.pacman);
  return (
    <h4
          className={`${
            isDebug ? "flex" : "hidden"
          } flex-col items-center justify-center gap-2 text-white`}
        >
          <span>Pacman position</span>
          <span>
            x:{position.x} Y:{position.y}
          </span>
          <span>Pacman state: {state}</span>
        </h4>
  )
}
