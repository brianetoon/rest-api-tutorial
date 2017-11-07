const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', {useMongoClient: true});
mongoose.Promise = global.Promise;

// body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// custom error handling middleware
app.use(function(err, req, res, next){
	// console.log(err);
	res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
	console.log('now listening for requests');
});
