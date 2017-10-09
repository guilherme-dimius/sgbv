var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema({
        locutor : 
        {
            type: [mongoose.Schema.ObjectId],
            ref: 'Locutor',
            required: true
        },
        bibliotecaVoz : 
        {
            type: [mongoose.Schema.ObjectId],
            ref: 'BibliotecaVoz',
            required: true
        },
        gravacoesVoz :
        {
            type: [mongoose.Schema.ObjectId],
            ref: 'Voz',
            required: true
        },
        dirGravacao : 
        {
            type: String,
            required: true
        },        
    });
    return mongoose.model('GravacaoVoz', schema);
}