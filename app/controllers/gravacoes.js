module.exports = function(app) 
{
   var controller = {};
   var Gravacao = app.models.Gravacao;

   // Retorna todos as gravacoes de voz cadastradas
   controller.listar = function(req, res) 
   {
      Gravacao.find().populate('locutor')
      .populate('biblioteca')
      .populate('codificacao')
      .exec().then(
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

   // Retorna um gravacoes, identificado pelo id
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

      Gravacao.remove({_id: idGravacao}).exec().then(
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

   controller.novo = function(req, res) 
   {
      Gravacao.create(req.body).then(
         function(gravacao) 
         {
            // HTTP 201: criado            
            res.status(201).json(gravacao);
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
      var idGravacao = req.body._id;

      Gravacao.findByIdAndUpdate(idGravacao, req.body).then(
         function(gravacao) 
         {
            res.status(200).json(gravacao);
         },
         function(erro) 
         {
            console.error(erro);
            res.status(404).json('Gravação não encontrado para atualizar');
         }
      )
   }



   return controller;

}