const mongoose = require('mongoose');

module.exports = function() 
{
    const schema = mongoose.Schema({
        _id : 
        {
            type: Object,
            required: true
        },
        idGravacao : 
        {
            type: Object,
            required: true
        },
        idVoz : 
        {
            type: Object,
            required: true
        }
    });
    return mongoose.model('BibliotecaVoz', schema);
}