import React from "react";

export default function Dot({ map, isPower }) {
  let size;
  switch (map) {
    case "challenge":
      size = 32;
      break;
    case "classic":
      size = 48;
      break;
    case "small":
      size = 64;
      break;
    default:
      size = 32;
      break;
  }
  return (
    <div
      className={`${isPower ? "rounded-full" : ""} bg-slate-50`}
      style={{
        width: isPower ? Math.round(size / 2) : Math.round(size / 8),
        height: isPower ? Math.round(size / 2) : Math.round(size / 8),
      }}
    ></div>
  );
}
