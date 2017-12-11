var mongoose = require('mongoose');

module.exports = function() 
{
    var schema = mongoose.Schema(
    {
      nome : 
      {
          type: String,
          required: true,
          index: { unique: true }
      },
      data :
      {
          type: Date
      },
      biblioteca : 
      {
          type: mongoose.Schema.ObjectId,
          ref: 'Biblioteca',
      }
    });
  return mongoose.model('Projeto', schema, 'projetos');
}