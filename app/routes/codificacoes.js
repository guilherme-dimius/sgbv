module.exports = function(app) 
{
   var controller = app.controllers.codificacoes;

   app.get('/codificacoes', controller.listar);
   app.get('/codificacoes/:id', controller.obterUm);
   app.delete('/codificacoes/:id', controller.excluir);
}