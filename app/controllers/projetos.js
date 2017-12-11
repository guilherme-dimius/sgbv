module.exports = function(app) 
{
   var controller = {};
   var Projeto = app.models.Projeto;

   // Retorna todos os locutores cadastrados
   controller.listar = function(req, res) 
   {
      Projeto.find()
      .populate('biblioteca')
      .populate('codificacao')
      .exec().then(
         function(projetos) 
         {// Callback se der certo
            res.json(projetos);
         },
         function(erro) 
         {// Callback se der errado
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );   
   }

   // Retorna um locutor, identificado pelo id
   controller.obterUm = function(req, res) 
   {
      var idProjeto = req.params.id;
      Projeto.findById(idProjeto).exec().then(
         function(projeto) 
         {
            if (!projeto) throw new Error('Projeto não encontrado');
            res.json(projeto);
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
      var idProjeto = req.params.id;

      Projeto.remove({_id: idProjeto}).exec().then(
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
      Projeto.create(req.body).then(
         function(projeto) 
         {
            // HTTP 201: criado            
            res.status(201).json(projeto);
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
      var idProjeto = req.body._id;

      Projeto.findByIdAndUpdate(idProjeto, req.body).then(
         function(projeto) 
         {
            res.status(200).json(projeto);
         },
         function(erro) 
         {
            console.error(erro);
            res.status(404).json('Projeto não encontrado para atualizar');
         }
      )
   }

   return controller;

}