export default function CheckCollision(obj1, size1, obj2, size2) {
  const obj1CenterX = obj1.x + size1 / 2;
  const obj1CenterY = obj1.y + size1 / 2;
  const obj1Radius = size1 / 8; // Para detección circular (más precisa)

  // Definir los bordes de la pared
  const obj2Left = obj2.x;
  const obj2Right = obj2.x + size2;
  const obj2Top = obj2.y;
  const obj2Bottom = obj2.y + size2;

  // Verificar colisión
  return (
    obj1CenterX + Math.round(obj1Radius / 1.32) > obj2Left &&
    obj1CenterX - obj1Radius < obj2Right &&
    obj1CenterY + obj1Radius > obj2Top &&
    obj1CenterY - obj1Radius < obj2Bottom
  );
}
