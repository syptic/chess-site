import React from 'react';
import { InnerPieceProps } from '../Piece';

function Rook({ shadowFill }: InnerPieceProps) {
    return (
        <>
            <circle cx="100" cy="100" r="80" fill={shadowFill} />

            <rect x="57.5" y="57.5" width="85" height="85" fill={shadowFill} />

            <rect x="55" y="55" width="15" height="15" fill={shadowFill} />
            <rect x="92.5" y="55" width="15" height="15" fill={shadowFill} />
            <rect x="130" y="55" width="15" height="15" fill={shadowFill} />
            <rect x="55" y="92.5" width="15" height="15" fill={shadowFill} />
            <rect x="130" y="92.5" width="15" height="15" fill={shadowFill} />
            <rect x="55" y="130" width="15" height="15" fill={shadowFill} />
            <rect x="92.5" y="130" width="15" height="15" fill={shadowFill} />
            <rect x="130" y="130" width="15" height="15" fill={shadowFill} />

        </>
    );
}

export default Rook;
