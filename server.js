var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

//app.options('*', cors());

//app.use(cors());
app.use('*',function(req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
     next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



mongoose.connect(process.env.MONGOLAB_URI);
app.set('superSecret','joe-productions');

require('./routes/route.js')(app);

var port = process.env.PORT || 8000;

app.listen(port,'0.0.0.0',function(){
    console.log('Magic is happening at localhost port ' + port +'...');
});
