const UserModel = (sequelize, type) => {
    return sequelize.define('users',{id: {
                  type: type.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
                },
                username: type.STRING,
                secret: type.STRING,
                name: type.STRING,
                last_name: type.STRING,
                birthday: type.DATEONLY,
                country: type.STRING,
                email: type.STRING,
                encrypted_password: type.STRING,
                reset_password_token: type.STRING,
                reset_password_sent_at: type.DATE,
                remember_created_at: type.DATE},
                )
}

module.exports = {UserModel}