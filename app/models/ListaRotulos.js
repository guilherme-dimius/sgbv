const mongoose = require('mongoose');

module.exports = function() 
{
    const schema = mongoose.Schema({
        _id : 
        {
            type: Object,
            required: true
        },
        idRotulos : 
        {
            type: Object,
            required: true
        },
    });
    return mongoose.model('ListaRotulos', schema);
}