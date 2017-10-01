module.exports = function(app) 
{
   
    const controller = app.controllers.users;
    
    app.get('/users', controller.users);
}