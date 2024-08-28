import React from 'react';
import { InnerPieceProps } from '../Piece';

function Knight({ shadowFill }: InnerPieceProps) {
    return (
        <>
            <circle cx="100" cy="100" r="80" fill={shadowFill} />
            <circle cx="100" cy="100" r="55" fill={shadowFill} />

            <polygon points="110,40 90,40 70,120 130,120" fill={shadowFill} />

            <circle cx="70" cy="120" r="10" fill={shadowFill} />
            <circle cx="130" cy="120" r="10" fill={shadowFill} />
        </>
    );
}

export default Knight;
