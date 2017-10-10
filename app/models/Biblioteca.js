var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema(
    {
        nome : 
        {
            type: String,
            required: true,
            index: { unique: true }
        },
        rotulos :
        {
            type: [String],
            required: true
        },
        observacoes : 
        {
            type: String
        },
        data : 
        {
            type: Date,
        }   
    });
    return mongoose.model('BibliotecaVoz', schema, 'bibliotecas');
}