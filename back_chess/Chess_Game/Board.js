import Piece from './Piece'

const Board = function (board_state, seed = null) {
    this.tiles = Array(7).fill(null).map(() => Array(7))
    this.whites = []
    this.blacks = []
    this.WKing
    this.BKing
    //not sure if this is gonna work here since build board is a proto function
    //that is true to the methods such as place special pieces
    if (board_state == null) {
        this.build_board_new(seed)
    } else {
        this.build_board(board_state)

    }
}

Board.prototype.build_board = function (boardstate) {
    this.tiles = JSON.parse(boardstate)
    this.updateLists()
}

Board.prototype.build_board_new = function (seed) {
    //board_code = ['B','R','K','R','N','B','N','Q']

    this.place_special_pieces(seed)
    this.place_pawns()
    this.updateLists()
}

Board.prototype.place_special_pieces = function (code) {
    let x = 0
    for (const i in code) {

        this.tiles[0][x] = new Piece(i, [0, x], "black")
        this.tiles[7][x] = new Piece(i, [7, x], "white")

        if (i == 'K') {
            this.BKing = this.tiles[0][x]
            this.WKing = this.tiles[7][x]
        }

        x++
    }
}

Board.prototype.place_pawns = function () {

    for (let i = 0; i < 8; i++) {
        this.tiles[1][i] = new Piece("P", [1, i], "black")
        this.tiles[6][i] = new Piece("P", [6, i], "white")
    }
}

Board.prototype.piece_can_move = function (Ipiece) {

    this.can_move_to = []

    for (const i in Ipiece.movelist) {

        let movement = true
        //verify move isn't fucking up
        let move = 0

        while (movement == true) {

            let bound_valid = this.bound_check(Ipiece, Ipiece.movelist[move])

            if (bound_valid[0] == true) {
                let target = []
                target[0] = bound_valid[1]
                target[1] = bound_valid[2]
                if (this.tiles.Piece.color != Ipiece.color) {
                    Ipiece.can_move_to.push([
                        [target], "Eat"
                    ])
                    movement = false
                } else if (this.tiles[target[0], this.tiles[1]] == null) {
                    Ipiece.can_move_to.push([
                        [target], "Move"
                    ])

                    if (Ipiece.longmovement == false) {
                        movement = false
                    }
                } else {
                    console.log("NA")
                }
            }
            move++
        }
    }
}

Board.prototype.bound_check = function (InPiece, move) {

    let moves = InPiece.movelist[move]
    let x = InPiece.x + moves[0]
    let y = InPiece.y + moves[1]
    if (x < 8 && x > -1 && y < 8 && y > -1) {

        return ([true, x, y])
    } else {
        return false
    }
}

Board.prototype.move_piece = function (IPiece, move, target) {

    let possible = IPiece.can_move_to.includes(target)

    if (possible) {
        let a = IPiece.x
        let b = IPiece.y
        let moves = IPiece.movelist[move]
        let x = a + moves[0]
        let y = b + moves[1]
        IPiece.x = x
        IPiece.y = y
        this.tiles[x][y] = IPiece
        this.tiles[a][b] = null

    }
}

Board.prototype.serialize = function () {

    let a = JSON.stringify(this.tiles)

    return a

}

Board.prototype.updateLists = function () {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let temp = this.tiles[i][j].Piece
            if (this.tiles[i][j].Piece && temp.color == 'white') {

                this.whites.push(temp)

            } else if (this.tiles[i][j].Piece && temp.color == 'white') {

                this.blacks.push(temp)
            }
        }
    }

}