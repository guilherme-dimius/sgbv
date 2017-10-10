var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema({
        locutor : 
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Locutor',
            required: true
        },
        bibliotecaVoz : 
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Biblioteca',
            required: true
        },
        gravacoesVoz :
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Voz',
            required: true
        },
        dirGravacao : 
        {
            type: String,
            required: true
        },        
    });
    return mongoose.model('GravacaoVoz', schema, 'gravacoes');
}