import React from "react";
import Dot from "../components/sprites/dot";
import Ghost from "../components/sprites/ghost";
import Pacman from "../components/sprites/pacman";
import Fruit from "../components/sprites/fruit";
import MazePart from "../components/sprites/mazePart";

export default function Sprites() {
  return (
    <main className="flex flex-col items-center w-full p-4 h-dvh">
      <h2 className="mb-10 text-xl font-bold tracking-wider text-center text-slate-300">
        Sprites Display
      </h2>
      <div className="flex items-center justify-center gap-6">
        <Pacman size={48} direction="" state="eating" />
        <Dot map="classic" />
        <Dot map="classic" isPower={true} />
        <Ghost map="classic" ghost="inky" direction="up" state="walking" />
        <Ghost map="classic" ghost="blinky" direction="down" state="walking" />
        <Ghost map="classic" ghost="pinky" direction="right" state="walking" />
        <Ghost map="classic" ghost="clyde" direction="left" state="walking" />
        <Ghost
          map="classic"
          ghost="pinky"
          direction="right"
          state="frightened"
        />
        <Ghost
          map="classic"
          ghost="clyde"
          direction="left"
          state="recovering"
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <Fruit map="classic" ID={1} />
        <Fruit map="classic" ID={2} />
        <Fruit map="classic" ID={3} />
        <Fruit map="classic" ID={4} />
        <Fruit map="classic" ID={5} />
        <Fruit map="classic" ID={6} />
        <Fruit map="classic" ID={7} />
        <Fruit map="classic" ID={8} />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <MazePart type="doubleWall" size={48} rotation="right" />
        <MazePart type="doubleWall" size={48} rotation="down" />
        <MazePart type="doubleWall" size={48} rotation="left" />
        <MazePart type="doubleWall" size={48} rotation="up" />
        <MazePart type="simpleWall" size={48} rotation="right" />
        <MazePart type="simpleWall" size={48} rotation="down" />
        <MazePart type="simpleWall" size={48} rotation="left" />
        <MazePart type="simpleWall" size={48} rotation="up" />
        <MazePart type="cornerWall" size={48} rotation="right" />
        <MazePart type="cornerWall" size={48} rotation="down" />
        <MazePart type="cornerWall" size={48} rotation="left" />
        <MazePart type="cornerWall" size={48} rotation="up" />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <MazePart type="doubleCorner" size={48} rotation="right" />
        <MazePart type="doubleCorner" size={48} rotation="down" />
        <MazePart type="doubleCorner" size={48} rotation="left" />
        <MazePart type="doubleCorner" size={48} rotation="up" />
        <MazePart type="simpleCorner" size={48} rotation="right" />
        <MazePart type="simpleCorner" size={48} rotation="down" />
        <MazePart type="simpleCorner" size={48} rotation="left" />
        <MazePart type="simpleCorner" size={48} rotation="up" />
        <MazePart type="miniCorner" size={48} rotation="right" />
        <MazePart type="miniCorner" size={48} rotation="down" />
        <MazePart type="miniCorner" size={48} rotation="left" />
        <MazePart type="miniCorner" size={48} rotation="up" />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <MazePart type="longCorner" size={48} rotation="right" />
        <MazePart type="longCorner" size={48} rotation="down" />
        <MazePart type="longCorner" size={48} rotation="left" />
        <MazePart type="longCorner" size={48} rotation="up" />
        <MazePart type="squareCorner" size={48} rotation="right" />
        <MazePart type="squareCorner" size={48} rotation="down" />
        <MazePart type="squareCorner" size={48} rotation="left" />
        <MazePart type="squareCorner" size={48} rotation="up" />
        <MazePart type="rectangle" size={48} rotation="right" />
        <MazePart type="rectangle" size={48} rotation="down" />
        <MazePart type="rectangle" size={48} rotation="left" />
        <MazePart type="rectangle" size={48} rotation="up" />
      </div>
    </main>
  );
}
