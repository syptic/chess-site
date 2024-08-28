import React from 'react';
import { BlackShadow, WhiteShadow } from './Shadows';

import { King, Queen, Rook, Knight, Bishop, Pawn } from './InnerPieces';

export interface PieceProps {
    pieceStr: "pawn" | "rook" | "queen" | "king" | "bishop" | "knight";
    color: "white" | "black";
    handleMove: Function;
}

export interface InnerPieceProps {
    shadowFill: "url(#whiteShadowGradient)" | "url(#blackShadowGradient)"
}

function Piece({ pieceStr, color, handleMove }: PieceProps) {
    const pieceMapping = {
        "pawn": Pawn,
        "king": King,
        "queen": Queen,
        "bishop": Bishop,
        "knight": Knight,
        "rook": Rook
    }
    const InnerPiece = pieceMapping[pieceStr];
    const shadowFill: InnerPieceProps = {
        shadowFill: color === "white" ? "url(#whiteShadowGradient)" : "url(#blackShadowGradient)"
    };
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', color + " " + pieceStr);
        console.log("handleDragStart", e);
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log("handleDragEnd", e);
        handleMove();
    };
    return (
        <div draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <title>{color + " " + pieceStr}</title>
                {color === "black" ? <BlackShadow /> : <WhiteShadow />}
                <InnerPiece {...shadowFill} />
            </svg>
        </div>
    );
}

export default Piece;
