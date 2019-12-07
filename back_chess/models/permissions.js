const PermissionModel = (sequelize, type) => {
    return sequelize.define('permissions',{id: {
                  type: type.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
                },
                name: type.STRING
    }
                )
}

module.exports = {PermissionModel}