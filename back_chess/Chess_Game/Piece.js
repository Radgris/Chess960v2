const Piece = function (key, positions, faction ) {
    this.x = positions[0]
    this.y = positions[1]
    this.color = faction
    this.can_move_to = [ ]
    this.type = key
    this.longmovement = false

    this.movelist = [
        [
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, 1]
        ],
        [
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, 1]
        ],
        [
            [0, -1],
            [1, 0],
            [0, 1],
            [-1, 0]
        ],
        [
            [1, -1],
            [1, 1],
            [-1, 1],
            [-1, 1]
        ],
        [
            [1, -2],
            [2, -1],
            [2, 1],
            [1, 2],
            [-1, 2],
            [-2, 1],
            [-2, 1],
            [-1, 2]
        ],
        [
            [0, 2],
            [0, 1],
            [1, 1],
            [-1, 1]
        ],
        [
            [0, -2],
            [0, -1],
            [1, -1],
            [-1, 1]
        ]
    ]

    switch (key) {
        case 'K':
            this.movelist = this.movelist[0]
            break
        case 'Q':
            this.movelist = this.movelist[1]
            this.longmovement = true
            break
        case 'R':
            this.movelist = this.movelist[2]
            this.longmovement = true
            break
        case 'B':
            this.movelist = this.movelist[3]
            this.longmovement = true
            break
        case 'K':
            this.movelist = this.movelist[4]
            break
        case 'P':

            if (this.color == "black") {
                this.movelist = this.movelist[5]
            } else if (this.color == "white") {
                this.movelist = this.movelist[6]
            } else {

            }
            break
        default:
    }
}