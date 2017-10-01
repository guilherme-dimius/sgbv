const mongoose = require('mongoose');

module.exports = function() 
{
    const schema = mongoose.Schema({
        _id : 
        {
            type: Object,
            required: true
        },
        nomeArquivo : 
        {
            type: String,
            required: true
        },
    });
    return mongoose.model('Voz', schema);
}