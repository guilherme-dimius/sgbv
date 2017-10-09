var mongoose = require('mongoose');

module.exports = function() 
{
   var schema = mongoose.Schema({
        email: 
        { 
            type: String, 
            required: true, 
            index: { unique: true }
        },
        nome : 
        {
            type: String,
            required: true
        },
        cidade :
        {
            type: String,
            required: true
        },
        estado : 
        {
            type: String
        },
        sotaque :
        {
            type: String,
            required: true
        },
        genero :
        {
            type: String,
            required: true
        },
        problemaFala :
        {
            type: String,
        },
        idade :
        {
            type: Number,
            required: true
        },
   });

   return mongoose.model('Locutor', schema);
}