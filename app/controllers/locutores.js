module.exports = function(app) 
{
   var controller = {};
   var Locutor = app.models.Locutor;

   // Retorna todos os locutores cadastrados
   controller.listar = function(req, res) 
   {
      Locutor.find().exec().then(
         function(locutores) 
         {// Callback se der certo
            res.json(locutores);
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
      var idLocutor = req.params.id;
      Locutor.findById(idLocutor).exec().then(
         function(locutor) 
         {
            if (!locutor) throw new Error('Locutor não encontrado');
            res.json(locutor);
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
      var idLocutor = req.params.id;

      Locutor.remove({_id: idLocutor}).exec().then(
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
      Locutor.create(req.body).then(
         function(locutor) 
         {
            // HTTP 201: criado            
            res.status(201).json(locutor);
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
      var idLocutor = req.body._id;

      Locutor.findByIdAndUpdate(idLocutor, req.body).then(
         function(locutor) 
         {
            res.status(200).json(locutor);
         },
         function(erro) 
         {
            console.error(erro);
            res.status(404).json('Locutor não encontrado para atualizar');
         }
      )
   }



   return controller;

}