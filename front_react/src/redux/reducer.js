import setPieces from './boardCreator';

const reducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOAD_BOARD':
            return {...state, board:setPieces(action.payload.boardSeed, 0), numberPlayer: 0, selectedPiece: null};
        case 'PIECE_SELECTED':
            return {...state, board: showPossibleMoves(action.payload, state.board), selectedPiece: action.payload.selectedPiece};
        case 'MOVE_PIECE':
            return {...state, board: movePiece(action.payload, state.board, state.selectedPiece), selectedPiece:null};
        case 'SIGN_IN':
            console.log('signing in', action.payload.jwt)
            return {...state, jwt: action.payload.jwt}
        default:
            return {board:null, playerNumber: 0, selectedPiece:null, eatenPieces: null, jwt: null};
    }
};

const showPossibleMoves = ({posibleCells, attackCells}, board) => {
    let newBoard = {...board};
    posibleCells.forEach(cell => {
        newBoard[cell] = {...newBoard[cell], posMove: true};
    });
    attackCells.forEach(cell=>{
        newBoard[cell] = {...newBoard[cell], eatPiece: true};
    });
    return newBoard;
};

const movePiece = ({toCell}, board, fromCell) => {
    // console.log(board)
    let newBoard = {...board};
    newBoard[toCell] = {...newBoard[toCell], piece: newBoard[fromCell.cellKey].piece} ;
    newBoard[fromCell.cellKey] = {...newBoard[fromCell.cellKey], piece:null};
    return newBoard;
};

export default reducer;