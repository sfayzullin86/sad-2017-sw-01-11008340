var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('bookings', ['bookings']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/bookings', function (req, res) {
	console.log("I received a GET request");
	db.bookings.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/bookings', function (req, res) {
	console.log(req.body);
	db.bookings.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/bookings/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.bookings.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/bookings/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.bookings.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.put('/bookings/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.userName);
	db.bookings.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {userID: req.body.userID, userName: req.body.userName, cityFrom: req.body.cityFrom, 
    	cityTo: req.body.cityTo, date: req.body.date, time: req.body.time, 
    	class: req.body.class, planeNumber: req.body.planeNumber, seatNumber: req.body.seatNumber, price: req.body.price}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(3000);
console.log("Server running on port 3000");