function AppCtrl($scope, $http) {
	console.log("Hello world from controller");
	$http.get('/bookings').success(function(response) {
		console.log("I got the data I requested");
		$scope.bookings = response;
	});
	$scope.addBooking = function() {
		console.log($scope.booking);
	};
}