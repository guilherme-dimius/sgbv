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

      // Filtra o vetor 'locutor', gerando o vetor 'remanescentes'
      // sem o locutor excluído
      var remanescentes = locutores.filter(function(loc) 
      {
         return loc._id != idLocutor;
      });

      // Caso tenha havido exclusão, o vetor 'remanescentes'
      // será menor que o vetor 'locutores'
      if(remanescentes.length < locutores.length) 
      {
         locutores = remanescentes;
         res.status(200).send('Locutor excluído');
      }
      else 
      {
         res.status(404).send('Locutor não encontrado para exclusão');
      }

   }

   return controller;

}