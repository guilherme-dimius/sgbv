module.exports = function(app) 
{
   var controller = {};
   var Codificacao = app.models.Codificacao;

   // Retorna todos as codificações de voz cadastradas
   controller.listar = function(req, res) 
   {
      Codificacao.find().exec().then(
         function(codificacoes) 
         {// Callback se der certo
            res.json(codificacoes);
         },
         function(erro) 
         {// Callback se der errado
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );   
   }

   // Retorna um codificacoes, identificado pelo id
   controller.obterUm = function(req, res) 
   {
      var idCodificacao = req.params.id;
      Codificacao.findById(idCodificacao).exec().then(
         function(codificacao) 
         {
            if (!codificacao) throw new Error('Codificação de Voz não encontrado');
            res.json(codificacao);
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
      var idCodificacao = req.params.id;

      // Filtra o vetor 'codificacao', gerando o vetor 'remanescentes'
      // sem o coficicação excluído
      var remanescentes = codificacoes.filter(function(cod) 
      {
         return cof._id != idCodificacao;
      });

      // Caso tenha havido exclusão, o vetor 'remanescentes'
      // será menor que o vetor 'codificacao'
      if(remanescentes.length < codificacoes.length) 
      {
         codificacoes = remanescentes;
         res.status(200).send('Codificação de voz excluída');
      }
      else 
      {
         res.status(404).send('Codificação de voz não encontrada para exclusão');
      }
   }

   return controller;

}