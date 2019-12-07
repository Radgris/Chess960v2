const PermissionsUserModel = (sequelize, type) => {
    return sequelize.define('permissions_users',{
                user_id: type.INTEGER,
                permission_id: type.INTEGER},
                {
                    timestamps: false
                }
                )
}

module.exports = {PermissionsUserModel}