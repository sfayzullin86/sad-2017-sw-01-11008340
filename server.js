var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('bookings', ['bookings']);

app.use(express.static(__dirname + "/public"));

app.get('/bookings', function (req, res) {
	console.log("I received a GET request");
	db.bookings.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});
app.listen(3000);
console.log("Server running on port 3000");