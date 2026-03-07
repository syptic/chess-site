import { createContext, Dispatch, SetStateAction } from 'react';


export interface BoardContextType {
    piecesInfo: string[][] | null;
    setPiecesInfo: Dispatch<SetStateAction<string[][]>> | null;
    isWhiteTurn: boolean;
    setIsWhiteTurn: Dispatch<SetStateAction<boolean>> | null;
}

const BoardContext = createContext<BoardContextType>({
    piecesInfo: null,
    setPiecesInfo: null,
    isWhiteTurn: true,
    setIsWhiteTurn: null,
});

export default BoardContext;