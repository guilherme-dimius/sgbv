module.exports = function(app) 
{
    var controller = app.controllers.voz;
 
    app.route('/voz')
    .get(controller.listaVozes);
    
    app.route('voz:id')
    .get(controller.obtemVoz)
    .post(controller.salvaVoz)
    .put(controller.salvaVoz)
    .delete(controller.removeVoz);
 }