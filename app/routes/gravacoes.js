module.exports = function(app) 
{
   var controller = app.controllers.gravacoes;

   app.get('/gravacoes', controller.listar);
   app.get('/gravacoes/:id', controller.obterUm);
   app.delete('/gravacoes/:id', controller.excluir);
}