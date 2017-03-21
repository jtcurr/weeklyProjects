var express = require('express');
var bodyParser = require('body-parser');
var imageCollection = require('./routes/imageCollection.js')
var mongoose = require('mongoose');
var port = 8080;

//make a connection to mongoose/mongoDB
mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('Connected to MongoDB')
});

//server an instance of express
var app = express();

app.use(bodyParser());

app.use(express.static(__dirname));

//if an image is uploaded, route to image sender
app.post('/image', imageCollection.send)

app.get('/', function(req, res) {
	res.render('index.html');
})

app.listen(8080, function(res, req) {
	console.log('Listening on port ', port);
})