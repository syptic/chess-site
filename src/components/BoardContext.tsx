import { createContext, Dispatch, SetStateAction } from 'react';


export interface BoardContextType {
    piecesInfo: string[][] | null;
    setPiecesInfo: Dispatch<SetStateAction<string[][]>> | null;
    isWhiteTurn: boolean;
}

const BoardContext = createContext<BoardContextType>({
    piecesInfo: null,
    setPiecesInfo: null,
    isWhiteTurn: true,
});

export default BoardContext;