var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema({
        tipoCodificacao : 
        {
            type: String,
            required: true,
            index: { unique: true }
        },
        taxa : 
        {
            type: String
        }
    });
    return mongoose.model('Codificacao', schema, 'codificacoes');
}