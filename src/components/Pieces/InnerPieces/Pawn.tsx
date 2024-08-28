import React from 'react';
import { InnerPieceProps } from '../Piece';


function Pawn({ shadowFill }: InnerPieceProps) {
    return (
        <>
            <circle cx="100" cy="100" r="65" fill={shadowFill} />
            <circle cx="100" cy="100" r="30" fill={shadowFill} />

        </>
    );
}

export default Pawn;
