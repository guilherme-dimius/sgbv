module.exports = function(app) 
{
   var controller = app.controllers.projetos;

   app.get('/projetos', controller.listar);
   app.get('/projetos/:id', controller.obterUm);
   app.delete('/projetos/:id', controller.excluir);
   app.put('/projetos', controller.novo);
   app.post('/projetos', controller.atualizar);
}