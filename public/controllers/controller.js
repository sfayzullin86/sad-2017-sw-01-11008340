function AppCtrl($scope, $http) {
	console.log("Hello world from controller");
	var refresh = function() {
	$http.get('/bookings').success(function(response) {
		console.log("I got the data I requested");
		$scope.bookings = response;
		$scope.booking = "";
	});
	};
	
	refresh();

	$scope.addBooking = function() {
		console.log($scope.booking);
		$http.post('/bookings', $scope.booking).success(function(response) {
    	console.log(response);
    	refresh();
    	});
  };

  $scope.removeBooking = function(id) {
		console.log(id);
  };
}