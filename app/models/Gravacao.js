var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema({
        locutores : 
        {
            type: [mongoose.Schema.ObjectId],
            ref: 'Locutor',
            required: true
        },
        bibliotecas : 
        {
            type: [mongoose.Schema.ObjectId],
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
            required: true
        }       
    });
    return mongoose.model('Gravacao', schema, 'gravacoes');
}