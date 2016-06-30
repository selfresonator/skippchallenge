angular.module('seating.controller', [])
.controller('SeatingCtrl', function($scope) {
  $scope.size = 0;
  $scope.selected = false;
  $scope.chooseSize = function(num) {
    $scope.size = num;
    $scope.selected = true;
    console.log($scope.size);
  };

});
