import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Block from "./Block";
import BoardContext from "./BoardContext";
import DraggingContext from "./DraggingContext";
import { canMovePiece as canMovePieceUtil } from "../utils/moveUtils";
import * as startingPosition from "../utils/startingPosition.json";

interface Position {
  [key: string]: string;
}

function Board() {
  const dict: Position = startingPosition;
  const [piecesInfo, setPiecesInfo] = useState<string[][]>(
    Array.from({ length: 8 }, (_, y) =>
      Array.from({ length: 8 }, (_, x) => {
        const key = `${x},${y}`;
        const dictValue = dict[key];
        return dictValue;
      })
    )
  );
  const [isWhiteTurn, setIsWhiteTurn] = useState(true);
  const [sourceBlock, setSourceBlock] = useState<string | null>(null);

  useEffect(() => {
    setIsWhiteTurn(val => !val);
    console.log("piecesInfo updated", piecesInfo);

  }, [piecesInfo]);

  const canMovePiece = useCallback((fromX: number, fromY: number, toX: number, toY: number) => {
    return canMovePieceUtil(piecesInfo, fromX, fromY, toX, toY);
  }, [piecesInfo]);

  const squares = useMemo(() => piecesInfo.map((col, x) =>
    col.map((info, y) => {
      const blockId = `${y},${x}`;
      return (
        <Block
          key={blockId}
          blockId={blockId}
          x={x}
          y={y}
        />
      );
    })
  ), [piecesInfo]);

  return (

    <BoardContext.Provider value={{ piecesInfo, setPiecesInfo, isWhiteTurn }}>
      <DraggingContext.Provider value={{
        sourceBlockState: [sourceBlock, setSourceBlock],
        canDropPiece: canMovePiece
      }}>
        <div className="w-[min(100vw,100vh)] h-[min(100vw,100vh)]">
          <div className="w-full h-full grid grid-cols-8 grid-rows-8">
            {squares}
          </div>
        </div>
      </DraggingContext.Provider>
    </BoardContext.Provider>
  );
}

export default Board;
