module.exports = function(app) 
{
   var controller = {};
   var Gravacao = app.models.Gravacao;

   // Retorna todos as bibliotecas de voz cadastradas
   controller.listar = function(req, res) 
   {
      Gravacao.find().exec().then(
         function(gravacoes) 
         {// Callback se der certo
            res.json(gravacoes);
         },
         function(erro) 
         {// Callback se der errado
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );   
   }

   // Retorna um bibliotecaVoz, identificado pelo id
   controller.obterUm = function(req, res) 
   {
      var idGravacao = req.params.id;
      Gravacao.findById(idGravacao).exec().then(
         function(gravacao) 
         {
            if (!gravacao) throw new Error('Gravacao de Voz não encontrada');
            res.json(gravacao);
         },
         function(erro) 
         {
            console.error(erro);
            // HTTP 404: não encontrado
            res.status(404).json(erro);
         }
      );
   }

   controller.excluir = function(req, res) 
   {
      var idGravacao = req.params.id;

      // Filtra o vetor 'bibliotecaVoz', gerando o vetor 'remanescentes'
      // sem o bibliotecaVoz excluído
      var remanescentes = gravacoes.filter(function(grav) 
      {
         return grav._id != idGravacao;
      });

      // Caso tenha havido exclusão, o vetor 'remanescentes'
      // será menor que o vetor 'bibliotecasVoz'
      if(remanescentes.length < gravacoes.length) 
      {
         gravacoes = remanescentes;
         res.status(200).send('Gravação de voz excluída');
      }
      else 
      {
         res.status(404).send('Gravacao de voz não encontrada para exclusão');
      }
   }

   return controller;

}