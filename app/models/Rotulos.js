const mongoose = require('mongoose');

module.exports = function() 
{
    const schema = mongoose.Schema({
        _id : 
        {
            type: Object,
            required: true
        },
        descricao : 
        {
            type: String,
            required: true
        },
    });
    return mongoose.model('BibliotecaVoz', schema);
}