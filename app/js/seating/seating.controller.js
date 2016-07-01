angular.module('seating.controller', [])
.controller('SeatingCtrl', function($scope) {
  $scope.size = 0;
  $scope.selected = false;
  $scope.selectSize = function(num) {
    $scope.size = num;
    $scope.selected = true;
  };

  $scope.timeReserved;
  $scope.squareSelect = true;
  $scope.selectSeat = function() {
    if ($scope.squareSelect !== true) {
      $scope.timeReserved = $scope.timeReserved;
    } else {
      $scope.timeReserved = new moment().format('MMMM Do YYYY, h:mm:ss a');
    }
  };


})
.directive('isolate', function() {
    return {scope: true};
});
