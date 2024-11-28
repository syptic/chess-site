export const isDestinationEmpty = (piecesInfo: string[][], x: number, y: number) => !piecesInfo[y][x]?.length;

export const isSameColor = (piece1: string[], piece2: string[]) => piece1[0] === piece2[0];

export const isValidMove = (piece: string[], fromX: number, fromY: number, toX: number, toY: number) => {
    const pieceColor = piece[0];
    const pieceType = piece[1];
    switch (pieceType) {
        case 'pawn':
            // TODO: handle pawn cut logic
            const moveDirection = pieceColor === "white" ? 1 : -1;
            return (fromY === toY && (toX === fromX + moveDirection || ((fromX === 1 || fromX === 6) && toX === fromX + (moveDirection * 2))));
        case 'knight':
            return (Math.abs(fromX - toX) === 2 && Math.abs(fromY - toY) === 1) ||
                (Math.abs(fromX - toX) === 1 && Math.abs(fromY - toY) === 2);
        case 'bishop':
            return Math.abs(fromX - toX) === Math.abs(fromY - toY);
        case 'rook':
            return fromX === toX || fromY === toY;
        case 'queen':
            return Math.abs(fromX - toX) === Math.abs(fromY - toY) || fromX === toX || fromY === toY;
        // handle castle condition
        case 'king':
            return Math.abs(fromX - toX) <= 1 && Math.abs(fromY - toY) <= 1;
        default:
            return false;
    }
};

export const isPathClear = (piecesInfo: string[][], piece: string[], fromX: number, fromY: number, toX: number, toY: number) => {
    if (piece[1] === 'knight') return true;

    const deltaX = Math.sign(toX - fromX);
    const deltaY = Math.sign(toY - fromY);
    let x = fromX + deltaX;
    let y = fromY + deltaY;

    while (x !== toX || y !== toY) {
        if (!isDestinationEmpty(piecesInfo, x, y)) return false;
        x += deltaX;
        y += deltaY;
    }

    return true;
};

export const canMovePiece = (piecesInfo: string[][], fromX: number, fromY: number, toX: number, toY: number) => {
    if (fromX === toX && fromY === toY) return true;
    console.log(fromX, fromY, toX, toY, piecesInfo);
    const sourcePiece = piecesInfo[fromY][fromX]?.split(" ");
    const destinationPiece = piecesInfo[toY][toX]?.split(" ");
    if (destinationPiece?.length && isSameColor(sourcePiece, destinationPiece)) return false;

    return isValidMove(sourcePiece, fromX, fromY, toX, toY) && isPathClear(piecesInfo, sourcePiece, fromX, fromY, toX, toY);
};
