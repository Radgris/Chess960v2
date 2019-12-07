const Sequelize = require('sequelize');
const {UserModel} = require('../models/users')
const {PermissionsUserModel} = require('../models/permissionsUsers')
const {PermissionModel} = require('../models/permissions')
const {MatchesModel} = require('../models/matches')

const sequelize = new Sequelize('chess960_development', 'chess960', 'laWeaChess960.', {
  host: 'localhost',
  dialect:  'mysql' 
});

const User = UserModel(sequelize, Sequelize);
const PermissionsUser = PermissionsUserModel(sequelize, Sequelize);
const Permissions = PermissionModel(sequelize, Sequelize);
const Matches = MatchesModel(sequelize, Sequelize);

sequelize.sync()

module.exports = {User, PermissionsUser, Permissions, Matches}