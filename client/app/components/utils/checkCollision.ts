interface iCheckCollision {
  objectA: {x: number, y: number};
  sizeA: number;
  objectB: {x: number, y: number};
  sizeB: number;
}

export default function CheckCollision({objectA, sizeA, objectB, sizeB}: iCheckCollision) {

  const objectACenterX = objectA.x + sizeA / 2;
  const objectACenterY = objectA.y + sizeA / 2;
  const objectARadius =1; // Para detección circular (más precisa)

  // Definir los bordes de la pared
  

  // Verificar colisión
  return (
    objectACenterX + objectARadius >= objectB.x &&
    objectACenterX - objectARadius <= objectB.x + sizeB &&
    objectACenterY + objectARadius >= objectB.y &&
    objectACenterY - objectARadius <= objectB.y + sizeB
  );
}
