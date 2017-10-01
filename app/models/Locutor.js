const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      email : 
      {
         type: String,
         required: true
      },
      idBiblioteca : 
      {
         type: Object,
         required: true
      },
      nome : 
      {
         type: String,
         required: true
      },
      cidade :
      {
         type: Date,
         required: true
      },
      estado : 
      {
         type: String
      },
      sotaque :
      {
         type: String,
         required: true
      },
      genero :
      {
         type: String,
         required: true
      },
      problemaFala :
      {
         type: String,
      },
      idade :
      {
         type: Number,
         required: true
      },

   });

   return mongoose.model('Locutor', schema);

}