import React, { useContext } from 'react';
import Piece, { PieceProps } from './Pieces/Piece';
import BoardContext, { BoardContextType } from './BoardContext';
import DraggingContext, { DraggingContaxtType } from './DraggingContext';

interface Coordinate {
    x: number;
    y: number;
}

interface BlockProps extends Coordinate {
    blockId: string;
}

function Block({ x, y, blockId }: BlockProps) {
    const isBlack = (x + y) % 2;
    const { piecesInfo, setPiecesInfo }: BoardContextType = useContext(BoardContext);
    const { sourceBlockState, canDropPiece }: DraggingContaxtType = useContext(DraggingContext);

    const shownPiece = () => {
        if (piecesInfo?.[y][x]) {
            const pieceInfo: string[] = piecesInfo[y][x].split(" ");
            const color: PieceProps["color"] = pieceInfo[0] as unknown as "white" | "black";
            const pieceStr: PieceProps["pieceStr"] = pieceInfo[1] as unknown as "pawn" | "rook" | "queen" | "king" | "bishop" | "knight";
            return <Piece color={color}
                pieceStr={pieceStr}
                blockId={blockId}
            />;
        }
        return null;
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        // const startingPosition: string = e.dataTransfer.getData('text/plain');
        if (!sourceBlockState?.[0]) {
            throw new Error("No source block provided");
        }
        const [fromY, fromX] = sourceBlockState[0]?.split(",").map(Number);
        const canDrop = canDropPiece(fromX, fromY, x, y);

        e.dataTransfer.dropEffect = canDrop ? "move" : "none";
        console.log("handleDragOver", fromX, fromY, canDrop, e);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!sourceBlockState?.[0]) {
            throw new Error("No source block provided");
        }
        const [fromY, fromX] = sourceBlockState[0]?.split(",").map(Number);
        const pieceData = piecesInfo?.[fromY]?.[fromX];
        if (!pieceData) {
            throw new Error("No piece data provided");
        }
        setPiecesInfo && setPiecesInfo(prev => {
            const newPieceInfo = [...prev];
            newPieceInfo[fromY][fromX] = "";
            newPieceInfo[y][x] = pieceData;
            return newPieceInfo;
        });
        console.log("handleDrop", piecesInfo, blockId);
    };

    return (
        <div onDragOver={handleDragOver} onDrop={handleDrop} className={`w-1/8 h-1/8 ${isBlack ? 'bg-gray-00' : 'bg-gray-500'}`}
        >
            {shownPiece()}
        </div >
    );
}

export default Block;
