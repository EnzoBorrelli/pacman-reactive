import useAnimation from "~/hooks/pacman/useAnimation";

interface iPacman {
  direction: string;
  size: number;
  animation: string;
}

export default function Pacman({ direction, size, animation }: iPacman) {
  let _direction: string; // If pacman is dying, rotate it 90 degrees

  //controls the direction
  switch (direction) {
    case "up":
      _direction = "-rotate-90";
      break;
    case "down":
      _direction = "rotate-90";
      break;
    case "left":
      _direction = "rotate-180";
      break;

    default:
      _direction = "";
      break;
  }

  let animate;
    switch (animation) {
      case "chop":
        animate = useAnimation.EatAnimation(80);
        break;
      case "power":
        animate = useAnimation.EatAnimation(50);
        break;
      case "dead":
        animate = useAnimation.DeathAnimation();
        break;
      default:
        animate = `/assets/sprites/pacman/phase_1.png`;
    }
  

  return (
    <div className={`${_direction}`}>
      <img
        style={{ width: size, height: size }}
        src={animate}
        alt="."
      />
    </div>
  );
}
