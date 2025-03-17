import { useSelector } from 'react-redux';
import { RootState } from '~/store';

export default function PacmanDebug({isDebug}: {isDebug: boolean}) {
    const pacman = useSelector((state: RootState) => state.pacman);
  return (
    <h4
          className={`${
            isDebug ? "flex" : "hidden"
          } flex-col items-center justify-center gap-2 text-white`}
        >
          <span>Pacman position</span>
          <span>
            x:{pacman.position.x} Y:{pacman.position.y}
          </span>
          <span>Pacman state: {pacman.state}</span>
        </h4>
  )
}
