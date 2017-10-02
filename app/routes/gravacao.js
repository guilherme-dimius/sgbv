module.exports = function(app) 
{
    var controller = app.controllers.gravacao;
 
    app.route('/gravacao')
    .get(controller.listaGravacoes);

    app.route('gravacao:id')
    .get(controller.obtemGravacao)
    .post(controller.salvaGravacao)
    .put(controller.salvaGravacao)
    .delete(controller.removeGravacao)
 }