import React from 'react';
import Block from "./Block";
import * as startingPosition from "../utils/startingPosition.json";

interface Position {
  [key: string]: string;
}

function Board() {
  const dict: Position = startingPosition;
  const squares = Array.from({ length: 8 }, (_, y) => (
    Array.from({ length: 8 }, (_, x) => {
      const key = `${x},${y}`;
      const dictValue = dict[key];
      const pieceInfo: string[] = (dictValue?.split(" "));
      return <Block x={x} y={y} key={key} blockId={key} initPieceInfo={pieceInfo} />
    })
  ));

  return (
    <div className="w-[min(100vw,100vh)] h-[min(100vw,100vh)]">
      <div className="w-full h-full grid grid-cols-8 grid-rows-8">
        {squares}
      </div>
    </div>
  );
}

export default Board;
