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

   controller.novo = function(req, res) 
   {
      Codificacao.create(req.body).then(
         function(codificacao) 
         {
            // HTTP 201: criado            
            res.status(201).json(codificacao);
         },
         function(erro) {
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      )
   }

   controller.atualizar = function(req, res) 
   {
      var idCodificacao = req.body._id;

      Codificacao.findByIdAndUpdate(idCodificacao, req.body).then(
         function(codificacao) 
         {
            res.status(200).json(codificacao);
         },
         function(erro) 
         {
            console.error(erro);
            res.status(404).json('Codificação não encontrada para atualizar');
         }
      )
   }


   controller.excluir = function(req, res) 
   {
      var idCodificacao = req.params.id;

      Codificacao.remove({_id: idCodificacao}).exec().then(
         function() 
         {
            res.status(203).end();
         },
         function(erro) 
         {
            console.log(erro);
         }
      );
   }



   return controller;

}