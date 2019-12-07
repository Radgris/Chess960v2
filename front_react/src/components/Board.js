import React from 'react'
import ChessBox from './ChessBox'
import {connect} from 'react-redux'

let rows = [0,1,2,3,4,5,6,7]
let columns = ['A','B','C','D','E','F','G','H'];

const Board = ({board, numberPlayer}) => {
    return (
        <div className='chess-board'>
            <div className='chess-column-indicator'>
                <p className='chess-id' style={{margin: 'unset'}}>Board ###</p>
                {columns.map((col)=>{
                    return numberPlayer === 0 ?
                    <p className='chess-column'>{col}</p>:
                    <p className='chess-column'>{col}</p>
                }
                )}
            </div>
            {rows.map((row)=>
                <div className='chess-row'>
                    {numberPlayer ===0 ? 
                        <p className='chess-id'>{row-8}</p>:
                        <p className='chess-id'>{row+1}</p>
                    }
                    {columns.map((column, j)=>(
                        <ChessBox key={board[column+(row+1)].cellKey} cell={board[column+(row+1)]} color={(column.charCodeAt(0)+row)%2}/>
                    ))}
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {board: state.board,
            numberPlayer: state.numberPlayer
    }
}

export default connect(mapStateToProps)(Board);