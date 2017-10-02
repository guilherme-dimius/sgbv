module.exports = function(app) 
{
    var controller = app.controllers.bibliotecaVoz;
 
    app.route('/biblioteca')
    .get(controller.listaBibliotecas);
    
    app.route('biblioteca:id')
    .get(controller.obtemBiblioteca)
    .post(controller.salvaBiblioteca)
    .put(controller.salvaBiblioteca)
    .delete(controller.removeBiblioteca);
 }