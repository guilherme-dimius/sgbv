
module.exports = function() 
{
   var controller = {}; // Objeto vazio

   controller.index = function(req, res) 
   {
      res.render('index', 
      {
          titulo: "Sistema de Gerenciamento de Bibliotecas de Voz", 
          versao : '1.0.0',
          sigla: 'SGBV'
      });
   }

   return controller;

}
