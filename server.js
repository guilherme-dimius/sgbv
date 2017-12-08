var http = require('http');
var express = require('./config/express');
var passport = require('./config/passport');

var db = require('./config/database');

// Iniciamos a conexão com o banco de dados
// junto com a aplicação
// Conecta-se ao MongoDB no servidor localhost
// para utilizar o banco de dados sgbv
db('mongodb://localhost/sgbv');

passport();

var app = express();

http.createServer(app).listen(app.get('port'), app.get('ip'),
   function() {
      console.log('Express Server escutando na porta ' + 
         app.get('port'));
   }
); 