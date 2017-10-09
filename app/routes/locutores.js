module.exports = function(app) 
{
   var controller = app.controllers.locutores;

   app.get('/locutores', controller.listar);
   app.get('/locutores/:id', controller.obterUm);
   app.delete('/locutores/:id', controller.excluir);
}