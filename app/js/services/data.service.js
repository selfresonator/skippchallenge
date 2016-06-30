angular.module('data.service', ['SearchCtrl'])
.factory('SearchService', function($http) {
  function(cityName) {
    return $http({
      method: 'GET',
      url: '',
      city: cityName
    });
  }

  return {
      searchCity: searchCity
  };
});
