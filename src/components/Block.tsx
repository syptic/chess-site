import React, { useState } from 'react';
import Piece, { PieceProps } from './Pieces/Piece';

interface Coordinate {
    x: number;
    y: number;
}

interface BlockProps extends Coordinate {
    initPieceInfo: string[];
    blockId: string;
}

function Block({ x, y, initPieceInfo, blockId }: BlockProps) {
    let noMove: boolean;
    const isBlack = (x + y) % 2;
    const [pieceInfo, setPieceInfo] = useState<string[]>(initPieceInfo);
    const shownPiece = () => {
        if (pieceInfo?.length === 2) {
            const color: PieceProps["color"] = pieceInfo[0] as unknown as "white" | "black";
            const pieceStr: PieceProps["pieceStr"] = pieceInfo[1] as unknown as "pawn" | "rook" | "queen" | "king" | "bishop" | "knight";
            return <Piece color={color}
                pieceStr={pieceStr} handleMove={handlePieceMoved} />;
        }
        return null;
    }

    const handlePieceMoved = () => {
        console.log("handlePieceMoved", blockId);
        !noMove && setPieceInfo([]);
        noMove = false;
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const pieceData: string = e.dataTransfer.getData('text/plain');
        console.log("handleDrop", pieceInfo, pieceData, e);
        if (pieceInfo?.join(" ") === pieceData) {
            noMove = true;
            return;
        }
        setPieceInfo(pieceData?.split(" "));

    };

    return (
        <div onDragOver={handleDragOver} onDrop={handleDrop}
            key={blockId} className={`w-1/8 h-1/8
                ${isBlack ? 'bg-gray-00' : 'bg-gray-500'}
                `}
        >
            {shownPiece()}
        </div >
    );
}

export default Block;
