const userController = require('../controllers/userController');
const gameController = require('../controllers/gameController');
const auth = require('./auth');

var userRoutes = (app) => {
 app.post('/api/user/signup', userController.signup);

 app.post('/api/user/login', userController.signin);
 
 app.get('/api/user/:id',auth.required, userController.getuser);
 
 app.get('/api/start', auth.required, gameController.startGame);
}

module.exports = userRoutes;