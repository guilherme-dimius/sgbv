module.exports = function(app) 
{
   var controller = {};
   var Projeto = app.models.Projeto;

   // Retorna todos os locutores cadastrados
   controller.listar = function(req, res) 
   {
      Projeto.find().exec().then(
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

      // Filtra o vetor 'locutor', gerando o vetor 'remanescentes'
      // sem o locutor excluído
      var remanescentes = projetos.filter(function(proj) 
      {
         return proj._id != idProjeto;
      });

      // Caso tenha havido exclusão, o vetor 'remanescentes'
      // será menor que o vetor 'locutores'
      if(remanescentes.length < projetos.length) 
      {
         projetos = remanescentes;
         res.status(200).send('Projeto excluído');
      }
      else 
      {
         res.status(404).send('Projeto não encontrado para exclusão');
      }

   }

   return controller;

}