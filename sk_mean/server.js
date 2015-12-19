// modules ==========================================
var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// configurations ===================================

// config files
var db = require('./config/db');

var port = process.env.PORT || 8000; // set our port
// mongoose.connect(db.url); // connect to our db (uncomment after fill mongodb credentials in db.js)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Overried'));
app.use(express.static(__dirname + '/public'));

// routes ===========================================
require('./app/routes')(app); // config our routes

// start app ========================================
app.listen(port);
console.log('Magic happends on port ' + port);
exports = module.exports = app;
