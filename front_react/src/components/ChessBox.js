import React from 'react';
import {connect} from 'react-redux';

const ChessBox = ({color, cell, selectPiece, selectedMove, playerNumber}) => {
    let pieceImage = cell.piece ? require(`../assets/${cell.piece.color+cell.piece.name}.png`) : require(`../assets/whiteR.png`);
    const cellSelected = () => {
        if(!cell.piece){
            if(cell.posMove){
                console.log(cell)
                selectedMove(cell.cellKey)
            }
        } else if((cell.piece.color==='white' && playerNumber === 0)|| (cell.piece.color==='black' && playerNumber === 1)){
            console.log(cell)
            selectPiece(cell,['D2','F5','H1'],['D2','H1'])
        } else {
            console.log(cell)
            selectedMove(cell.cellKey)
        }
    };

    return (
        <div className='chess-cell' 
            style={
                {backgroundColor: color===0?'#5C1900':'#DE9967',
                borderStyle: cell.posMove ? 'solid': '',
                borderColor: cell.eatPiece ? '#ff0000': cell.posMove ? '#fbff00': '',
                borderWidth: cell.posMove ? '1px': ''
                }
            } 
            onClick={cellSelected}>
            {
                cell.piece ? 
                    <img src={pieceImage} className='piece-image' alt='piece'/> :
                    <img src={pieceImage} className='piece-image' style={{visibility: 'hidden'}} alt='blank space'/>
            }
        </div>
    );
};

const selectPiece = (cell, posibleMoves, attackMoves)=>{
    return {
        type: 'PIECE_SELECTED',
        payload: {
            selectedPiece: cell,
            posibleCells: posibleMoves,
            attackCells: attackMoves
        }
    };
};

const selectedMove = (to) =>{
    return {
        type: 'MOVE_PIECE',
        payload: {
            toCell: to
        }
    };
};

const mapStateToProps = (state) => {
    return {playerNumber: state.playerNumber}
}

export default connect(mapStateToProps, {selectPiece: selectPiece, selectedMove: selectedMove})(ChessBox);