const json = require('../Chess_Game/openings.json');

const startGame = (req, res) => {
    let board_seed = getRndInteger(0, 959)
    let board_code = consult_seed(board_seed)
    res.status(200).send(board_code);
}

const consult_seed = (seed) => {
    return json[seed]
}
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = {startGame}