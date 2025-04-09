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

  function Animate() {
    switch (animation) {
      case "chop":
        return useAnimation.EatAnimation(80);
      case "power":
        return useAnimation.EatAnimation(50);
      case "dead":
        return useAnimation.DeathAnimation();
      default:
        return `/assets/sprites/pacman/phase_1.png`;
    }
  }

  return (
    <div className={`${_direction}`}>
      <img
        style={{ width: size, height: size }}
        src={Animate()}
        alt="pacman"
      />
    </div>
  );
}
