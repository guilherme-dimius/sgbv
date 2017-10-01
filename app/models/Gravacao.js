const mongoose = require('mongoose');

module.exports = function() 
{
    const schema = mongoose.Schema({
        _id : 
        {
            type: Object,
            required: true
        },
        idLocutor : 
        {
            type: Object,
            required: true
        },
        idBiblioteca : 
        {
            type: Object,
            required: true
        },
        idListaVoz : 
        {
            type: Object,
            required: true
        },
        dirGravacao : 
        {
            type: Object,
            required: true
        },
        
    });
    return mongoose.model('BibliotecaVoz', schema);
}