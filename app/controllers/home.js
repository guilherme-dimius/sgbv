module.exports = function() {

   var controller = {}; // Objeto vazio

   controller.index = function(req, res) 
   {
      res.render('index', {nome: "SGBV"});
   }

   controller.ajuda = function(req, res) 
   {
      // Renderização de view sem variáveis
      res.render('Ajuda');
   }

   controller.login = function(req, res) 
   {
      // Renderização de view com mais de uma variável
      res.render('login', 
      {
         nome: 'SGBV',
         mensagem: 'Informe seus dados para autenticação'
      });
   }

   return controller;

}