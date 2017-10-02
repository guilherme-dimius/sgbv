//var Controller = require('../controllers/home');

//var controller = Controller();

module.exports = function(app) 
{
   var controller = app.controllers.home;

   app.route('/')
   .get(controller.index);
}