import { objectSize } from "../enums/global";

interface iFruit {
  size: objectSize;
  ID: number;
}

export default function Fruit({ size, ID }: iFruit) {
  let fruit = `/assets/sprites/fruits/fruit_${ID}.png`;

  return (
    <div>
      <img style={{ width: size, height: size }} src={fruit} alt="fruit" />
    </div>
  );
}
