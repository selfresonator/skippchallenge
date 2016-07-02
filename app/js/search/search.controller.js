angular.module('search.controller', [])
.controller('SearchCtrl', function($scope, $route, SearchService) {
  $scope.restaurants = [];
  $scope.place = '';
  $scope.clientQuery = function(place) {
    SearchService.searchCity(place)
      .then(function(data) {
        $scope.restaurants = data.data.results;
      });
  };
});


// name, picture, two other attributes
