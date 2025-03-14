import MazePart from "../sprites/mazePart";

interface iTileController {
  position: { x: number; y: number };
  type: string;
  size: number;
  rotation: string;
  isFlip: boolean;
}

export default function TileController({
  position,
  type,
  size,
  rotation,
  isFlip,
}: iTileController) {
  return (
    <span
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <MazePart type={type} size={size} rotation={rotation} isFlip={isFlip} />
    </span>
  );
}
