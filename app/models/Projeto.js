var mongoose = require('mongoose');

module.exports = function() 
{
   var schema = mongoose.Schema({
        nome : 
        {
            type: String,
            required: true
        },
        data :
        {
            type: Date,
            required: true
        },
   });

   return mongoose.model('Projeto', schema);
}