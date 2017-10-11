var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema({
        locutor : 
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Locutor',
            required: true
        },
        biblioteca : 
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Biblioteca',
            required: true
        },
        rotulo : 
        {
            type: String,
            required: true
        },
        codificacao :
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Codificacao',
        }       
    });
    return mongoose.model('Gravacao', schema, 'gravacoes');
}