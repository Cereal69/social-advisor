var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

app.use(cors());
//app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(cors({
   'allowedHeaders': ['Access-Control-Allow-Origin','Access-Control-Allow-Methods','Access-Control-Allow-Credentials' 'Content-Type'],
   'exposedHeaders': ['sessionId'],
   'origin': '*',
   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
   'preflightContinue': false
  }));


mongoose.connect(process.env.MONGOLAB_URI);
app.set('superSecret','joe-productions');

require('./routes/route.js')(app);

var port = process.env.PORT || 8000;

app.listen(port,'0.0.0.0',function(){
    console.log('Magic is happening at localhost port ' + port +'...');
});
