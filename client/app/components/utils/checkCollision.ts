interface iCheckCollision {
  objectA: {x: number, y: number};
  sizeA: number;
  objectB: {x: number, y: number};
  sizeB: number;
}

export default function CheckCollision({objectA, sizeA, objectB, sizeB}: iCheckCollision) {

  const objectACenterX = objectA.x + sizeA / 2;
  const objectACenterY = objectA.y + sizeA / 2;
  const objectARadius = sizeA / 8; // Para detección circular (más precisa)

  // Definir los bordes de la pared
  const objectBLeft = objectB.x;
  const objectBRight = objectB.x + sizeB;
  const objectBTop = objectB.y;
  const objectBBottom = objectB.y + sizeB;

  // Verificar colisión
  return (
    objectACenterX + Math.round(objectARadius / 1.32) > objectBLeft &&
    objectACenterX - objectARadius < objectBRight &&
    objectACenterY + objectARadius > objectBTop &&
    objectACenterY - objectARadius < objectBBottom
  );
}
