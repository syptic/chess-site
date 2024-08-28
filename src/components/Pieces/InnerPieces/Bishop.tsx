import React from 'react';
import { InnerPieceProps } from '../Piece';

function Bishop({ shadowFill }: InnerPieceProps) {
    return (
        <>
            <circle cx="100" cy="100" r="80" fill={shadowFill} />
            <circle cx="100" cy="100" r="40" fill={shadowFill} />
            <circle cx="100" cy="100" r="15" fill={shadowFill} />
        </>
    );
}

export default Bishop;
