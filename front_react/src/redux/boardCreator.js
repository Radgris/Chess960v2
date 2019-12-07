import PIECES from '../constants/enums';

const setPieces = (order, playerNumber) => {
    let board = {};
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            board[String.fromCharCode(65+j)+(i+1)] = createEmptyCell(String.fromCharCode(65+j)+(i+1));
            if((i===0&&playerNumber===1)||(i===7&&playerNumber===0)){
                setPiecesColor(board[String.fromCharCode(65+j)+(i+1)],order[j], 'white');
            } else if ((i===0&&playerNumber===0)||(i===7&&playerNumber===1)) {
                setPiecesColor(board[String.fromCharCode(65+j)+(i+1)], order[j], 'black');
            } else if ((i===1&&playerNumber===1)||(i===6&&playerNumber===0)) {
                setPiecesColor(board[String.fromCharCode(65+j)+(i+1)],PIECES.PAWN, 'white');
            } else if ((i===1&&playerNumber===0)||(i===6&&playerNumber===1)) {
                setPiecesColor(board[String.fromCharCode(65+j)+(i+1)],PIECES.PAWN, 'black');
            }
        }
    }
    return board;
};

const setPiecesColor = (cell, piece, color) => {cell.piece= {name: piece, color: color}};

const createEmptyCell = (cell) => {return {piece: null, posMove: false, eatPiece: false, cellKey: cell}};

export default setPieces;