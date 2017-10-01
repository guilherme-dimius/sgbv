//const Controller = require('../controllers/home');

//const controller = Controller();

module.exports = function(app) {

   const controller = app.controllers.home;

   app.get('/', controller.index);
}