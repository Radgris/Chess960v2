const MatchesModel = (sequelize, type) => {
    return sequelize.define('matches',{id: {
                  type: type.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
                },
                result: type.STRING,
                moves: type.JSON,
                user_1_id: type.INTEGER,
                user_2_id: type.INTEGER,
                is_white_turn: type.BOOLEAN
                }
                )
}

module.exports = {MatchesModel}