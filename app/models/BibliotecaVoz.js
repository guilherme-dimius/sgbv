const mongoose = require('mongoose');

module.exports = function() 
{
    const schema = mongoose.Schema({
        _id : 
        {
            type: Object,
            required: true
        },
        nome : 
        {
            type: String,
            required: true
        },
        qtdGravacoes : 
        {
            type: Number,
            required: true
        },
        listaRotulos :
        {
            type: Object,
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