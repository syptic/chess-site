import React, { useContext, useMemo } from 'react';
import { BlackShadow, WhiteShadow } from './Shadows';
import { King, Queen, Rook, Knight, Bishop, Pawn } from './InnerPieces';
import DraggingContext, { DraggingContaxtType } from '../DraggingContext';
import BoardContext, { BoardContextType } from '../BoardContext';

export interface PieceProps {
    pieceStr: "pawn" | "rook" | "queen" | "king" | "bishop" | "knight";
    color: "white" | "black";
    blockId: string
}

export interface InnerPieceProps {
    shadowFill: "url(#whiteShadowGradient)" | "url(#blackShadowGradient)"
}

function Piece({ pieceStr, color, blockId }: PieceProps) {
    const pieceMapping = {
        "pawn": Pawn,
        "king": King,
        "queen": Queen,
        "bishop": Bishop,
        "knight": Knight,
        "rook": Rook
    }
    const { sourceBlockState }: DraggingContaxtType = useContext(DraggingContext);
    const { isWhiteTurn }: BoardContextType = useContext(BoardContext);

    const InnerPiece = pieceMapping[pieceStr];
    const shadowFill: InnerPieceProps = {
        shadowFill: color === "white" ? "url(#whiteShadowGradient)" : "url(#blackShadowGradient)"
    };
    const isDraggable = useMemo(() => (isWhiteTurn && color === "white") || (!isWhiteTurn && color === "black"), [color, isWhiteTurn]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        if (!isDraggable) {
            e.preventDefault();
            return;
        }
        e.stopPropagation();
        sourceBlockState?.[1] && sourceBlockState[1](blockId);
        e.dataTransfer.effectAllowed = "move";

        // Fix to strictly drag the visible SVG without surrounding padding
        const svgElement = e.currentTarget.querySelector('svg');
        if (svgElement) {
            e.dataTransfer.setDragImage(svgElement, svgElement.clientWidth / 2, svgElement.clientHeight / 2);
        }

        // Hide original piece slightly after drag starts to prevent duplicating visually
        setTimeout(() => {
            if (e.target instanceof HTMLElement) {
                e.target.style.opacity = '0';
            }
        }, 0);
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        sourceBlockState[1] && sourceBlockState[1](null);
        if (e.target instanceof HTMLElement) {
            e.target.style.opacity = '1';
        }
    };
    return (
        <div draggable={isDraggable} onDragStart={handleDragStart} onDragEnd={handleDragEnd} className="w-full h-full flex justify-center items-center overflow-visible cursor-grab active:cursor-grabbing">
            <svg width="85%" height="85%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
                <title>{color + " " + pieceStr}</title>
                {color === "black" ? <BlackShadow /> : <WhiteShadow />}
                <InnerPiece {...shadowFill} />
            </svg>
        </div>
    );
}

export default Piece;
