module.exports = function(app) 
{
   var controller = app.controllers.bibliotecas;

   app.get('/bibliotecas', controller.listar);
   app.get('/bibliotecas/:id', controller.obterUm);
   app.delete('/bibliotecas/:id', controller.excluir);
}