var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema({
        nome : 
        {
            type: String,
            required: true,
            index: { unique: true }
        },
        qtdGravacoes : 
        {
            type: Number,
            required: true
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
        dirBiblioteca : 
        {
            type: String,
            required: true
        }   
        });
    return mongoose.model('BibliotecaVoz', schema);
}