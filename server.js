// modules =================================================
var express        = require('express');
var app            = express();
// var mongoose       = require('mongoose');
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
// var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// connect to our mongoDB database (commented out after you enter in your own credentials)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// http ==================================================
app.get('/contactlist', function (req, res) {
	console.log('server.js(server log) : I received a GET request!');

	//dummy data
	// person1 = {
 //    	name : "DonghoonLee",
 //    	email : "skyfly33727@gamil.com",
 //    	number : "010-2057-5000"
 //    };

 //    person2 = {
 //    	name : "RoseKim",
 //    	email : "rosekm92@iruen.com",
 //    	number : "010-2057-6000"
 //    };

 //    person3 = {
 //    	name : "YwSon",
 //    	email : "sonyw@iruen.com",
 //    	number : "010-2057-7000"
 //    };

 //    var contactlist = [person1, person2, person3];
 //    res.json(contactlist);

	 db.contactlist.find(function(err, docs) {
	 	console.log('docs : ' + docs);
	 	res.json(docs)
	 });
});

app.post('/contactlist', function (req, res) {
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/contactlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/contactlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app