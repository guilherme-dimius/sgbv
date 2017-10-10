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

      // Filtra o vetor 'bibliotecaVoz', gerando o vetor 'remanescentes'
      // sem o bibliotecaVoz excluído
      var remanescentes = bibliotecas.filter(function(bib) 
      {
         return bib._id != idBiblioteca;
      });

      // Caso tenha havido exclusão, o vetor 'remanescentes'
      // será menor que o vetor 'bibliotecasVoz'
      if(remanescentes.length < bibliotecas.length) 
      {
         bibliotecas = remanescentes;
         res.status(200).send('Biblioteca de voz excluída');
      }
      else 
      {
         res.status(404).send('Biblioteca de voz não encontrada para exclusão');
      }
   }

   return controller;

}