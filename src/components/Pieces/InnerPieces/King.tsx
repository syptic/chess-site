import React from 'react';
import { InnerPieceProps } from '../Piece';

function King({ shadowFill }: InnerPieceProps) {
    return (
        <>
            <circle cx="100" cy="100" r="80" fill={shadowFill} />
            <circle cx="100" cy="100" r="60" fill={shadowFill} />
            <circle cx="100" cy="100" r="30" fill={shadowFill} />

            <rect x="90" y="60" width="20" height="80" fill={shadowFill} />
            <rect x="60" y="90" width="80" height="20" fill={shadowFill} />
        </>
    );
}

export default King;
