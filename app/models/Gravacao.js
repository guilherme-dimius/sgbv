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
        codificacao :
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Codificacao',
        }       
    });
    return mongoose.model('Gravacao', schema, 'gravacoes');
}