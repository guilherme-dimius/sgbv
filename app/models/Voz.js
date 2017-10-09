var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema({
        rotulo : 
        {
            type: String,
            required: true,
        },
        nomeArquivo : 
        {
            type: String,
            required: true,
            index: { unique: true }
        },
    });
    return mongoose.model('Voz', schema);
}