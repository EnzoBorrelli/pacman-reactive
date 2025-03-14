import React from "react";

export default function Fruit({ map,ID }) {
  let size;
  let fruit = `/assets/sprites/fruits/fruit_${ID}.png`;
  switch (map) {
    case "challenge":
      size = "size-[32px]";
      break;
    case "classic":
      size = "size-[48px]";
      break;
    case "small":
      size = "size-[64px]";
      break;
    default:
      size = "size-[32px]";
      break;
  }
  return (
    <div>
      <img
        className={size}
        src={fruit}
        alt="fruit"
      />
    </div>
  );
}
