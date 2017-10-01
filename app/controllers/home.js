module.exports = function() 
{
   const controller = {}; // Objeto vazio

   controller.index = function(req, res) 
   {
      res.render('index', 
      {
          titulo: "Sistema de Gerenciamento de Bibliotecas de Voz", 
          versao : '1.0.0',
          sigla: 'SGBV'
      });
   }
/*
   controller.ajuda = function(req, res) {
      // Renderização de view sem constiáveis
      res.render('ajuda');
   }

   controller.login = function(req, res) {
      // Renderização de view com mais de uma constiável
      res.render('login', {
         nome: 'GerenTG',
         mensagem: 'Informe seus dados para autenticação'
      });
   }
*/

   return controller;

}