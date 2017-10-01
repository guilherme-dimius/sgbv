const http = require('http');
const express = require('./config/express');

const db = require('./config/database');

db('mongodb://localhost/sgbv');

const app = express();

http.createServer(app).listen(app.get('port'), app.get('ip'),
   function() {
      console.log('Express Server ouvindo na porta ' + 
         app.get('port'));
   }
); 