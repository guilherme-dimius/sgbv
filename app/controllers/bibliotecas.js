module.exports = function(app) 
{
   var controller = {};
   var Biblioteca = app.models.Biblioteca;

   // Retorna todos as bibliotecas de voz cadastradas
   controller.listar = function(req, res) 
   {
      Biblioteca.find().exec().then(
         function(bibliotecas) 
         {// Callback se der certo
            res.json(bibliotecas);
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
      var idBiblioteca = req.params.id;
      Biblioteca.findById(idBiblioteca).exec().then(
         function(biblioteca) 
         {
            if (!biblioteca) throw new Error('Biblioteca de Voz não encontrado');
            res.json(biblioteca);
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
      var idBiblioteca = req.params.id;

      Biblioteca.remove({_id: idBiblioteca}).exec().then(
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
      Biblioteca.create(req.body).then(
         function(biblioteca) 
         {
            // HTTP 201: criado            
            res.status(201).json(biblioteca);
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
      var idBiblioteca = req.body._id;

      Biblioteca.findByIdAndUpdate(idBiblioteca, req.body).then(
         function(biblioteca) 
         {
            res.status(200).json(biblioteca);
         },
         function(erro) 
         {
            console.error(erro);
            res.status(404).json('Biblioteca não encontrado para atualizar');
         }
      )
   }

   return controller;

}