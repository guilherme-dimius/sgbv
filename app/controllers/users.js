module.exports = function() 
{
    const controller = {}; // Objeto vazio
    
   controller.users = function(req, res) 
   {
    const users = [
        {
            '_id': '1', 
            'nome' : 'João',
            'genero': 'M'
        },
        {
            '_id': "2", 
            'nome' : 'Joana',
            'genero': 'F'
        }
    ]
      res.render('users', {users});
   }

   

   return controller;

}