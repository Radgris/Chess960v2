const userController = require('../controllers/userController');
const gameController = require('../controllers/gameController');
const auth = require('./auth');

var userRoutes = (app) => {
 app.post('/user/signup', userController.signup);

 app.post('/user/login', userController.signin);
 
 app.get('/user/:id',auth.required, userController.getuser);
 
 app.get('/start', auth.required, gameController.startGame);
}

module.exports = userRoutes;