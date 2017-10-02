module.exports = function(app) 
{
    var controller = app.controllers.locutor;
 
    app.route('/locutor')
    .get(controller.listaLocutores);
    
    app.route('locutor:id')
    .get(controller.obtemLocutor)
    .post(controller.salvaLocutor)
    .put(controller.salvaLocutor)
    .delete(controller.removeLocutor);
 }