import React from 'react';
import { InnerPieceProps } from '../Piece';

function Queen({ shadowFill }: InnerPieceProps) {
    return (
        <>
            <circle cx="100" cy="100" r="80" fill={shadowFill} />

            <polygon points="100,130 70,70 130,70" fill={shadowFill} />

            <polygon points="85,70 100,55 115,70" fill={shadowFill} />
            <polygon points="95,50 100,35 105,50" fill={shadowFill} />

            <polygon points="90,50 93,40 96,50" fill={shadowFill} />

            <polygon points="104,50 107,40 110,50" fill={shadowFill} />

            <circle cx="100" cy="55" r="10" fill={shadowFill} />
            <circle cx="85" cy="70" r="5" fill={shadowFill} />
            <circle cx="115" cy="70" r="5" fill={shadowFill} />
        </>
    );
}

export default Queen;
