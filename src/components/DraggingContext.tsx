import React, { createContext, Dispatch, SetStateAction } from 'react';


export interface DraggingContaxtType {
    sourceBlockState: [string | null, Dispatch<SetStateAction<string | null>> | null];
    canDropPiece: Function
}

const DraggingContext = createContext<DraggingContaxtType>({
    sourceBlockState: [null, null],
    canDropPiece: () => false
});

export default DraggingContext;