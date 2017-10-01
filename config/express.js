const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

module.exports = function() {
   const app = express();

   app.set('port', 3000);
   app.set('ip', '127.0.0.1');
   app.set('view engine', 'ejs');
   app.set('views', './app/views');
   app.use(cors());

   /* RTA para que todos os navegadores entendam os
      verbos HTTP PUT e DELETE
   */
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(bodyParser.json());
   app.use(methodOverride());
     
   // cwd: change working directory
   consign({cwd: 'app'})
      .include('models')
      .then('controllers')
      .then('routes')
      .into(app);

   return app;
};