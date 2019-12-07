import Board from './Board'
import Player from './Player'
const {
    User
} = require('../config/db');
const json = require('./openings.json');

const Game = function (IDm, p1ID, p2ID) {
    this.id = IDm
    this.player1[0] = new Player("White", p1ID)
    this.player2[0] = new Player("Black", p2ID)
    this.turncounter = 0
    let board_seed = getRndInteger(0, 959)
    let board_code = this.consult_seed(board_seed)
    this.Board = new Board(null, this.board_code)
    this.turn = true

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Game.prototype.consult_seed = function (seed) {
    return json[seed]
}

Game.prototype.Verify_Board = function () {
    this.LoadBoard()





    this.StoreBoard()
}

Game.prototype.StoreBoard = function () {
    let toStore = this.Board.serialize()
}

Game.prototype.LoadBoard = function () {

    let boardstate
    this.Board = new Board(boardstate, null)

    this.Board.updateLists()

    for (let i in this.Board.whites) {
        Board.piece_can_move(i)
    }

    for (let j in this.Board.blacks) {
        Board.piece_can_move(j)
    }

}