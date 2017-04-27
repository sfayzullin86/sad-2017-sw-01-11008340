var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/bookings', function (req, res) {
	console.log("I received a GET request");
	booking1 = {
		userID: '00001',
		userName: 'John Smith',
		cityFrom: 'Frankfurt',
		cityTo: 'Barselona',
		date: '01.01.2017',
		time: '09:00',
		class: '1',
		planeNumber: 'K123',
		seatNumber: 'A1',
		price: '200'
	};
	booking2 = {
		userID: '00002',
		userName: 'Andrey Ivanov',
		cityFrom: 'Moscow',
		cityTo: 'Kiev',
		date: '09.01.2017',
		time: '15:00',
		class: '2',
		planeNumber: 'JH123',
		seatNumber: 'C23',
		price: '150'
	};
	booking3 = {
		userID: '00003',
		userName: 'Timur Bekmambetov',
		cityFrom: 'Moscow',
		cityTo: 'Washington',
		date: '20.01.2017',
		time: '10:00',
		class: '1',
		planeNumber: 'L123',
		seatNumber: 'A5',
		price: '450'
	};
	var bookings = [booking1, booking2, booking3];
	res.json(bookings);
});
app.listen(3000);
console.log("Server running on port 3000");