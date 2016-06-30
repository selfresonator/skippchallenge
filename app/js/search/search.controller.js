angular.module('search.controller', [])
.controller('SearchCtrl', function($scope, $route, SearchService) {
  $scope.restaurants = [];
  $scope.place = '';
  $scope.clientQuery = function(place) {
    SearchService.searchCity(place)
      .then(function(data) {
        $scope.restaurants[0] = data.data.results[0];
        $scope.restaurants[1] = data.data.results[1];
        $scope.restaurants[2] = data.data.results[2];
        $scope.restaurants[3] = data.data.results[3];
        console.log($scope.restaurants);
      });
  };
});


// name, picture, two other attributes
