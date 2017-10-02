var http = require('http');
var express = require('./config/express');
var db = require('./config/database');

db('mongodb://localhost/sgbv');

var app = express();

http.createServer(app).listen(app.get('port'), app.get('ip'),
   function() 
   {
      console.log('Express Server ouvindo na porta ' + 
         app.get('port'));
   }
); 