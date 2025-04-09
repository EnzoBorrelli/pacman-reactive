import { objectSize } from "../enums/global";

interface iDot {
  size: objectSize;
  isPower: boolean;
}

export default function Dot({ size, isPower }: iDot) {
  const _size = isPower ? Math.round(size / 1.5) : Math.round(size / 4);

  return (
    <div
      className={`${isPower ? "rounded-full" : ""} bg-slate-50`}
      style={{
        width: _size,
        height: _size,
      }}
    ></div>
  );
}
