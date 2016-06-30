angular.module('data.service', [])
.factory('SearchService', function($http) {
  return {
      searchCity: searchCity
  };

  function searchCity(place) {
    var key = 'AIzaSyDxgRA2vLaeap_nOCPHDsI1Nm2v1zHKr10';
    return $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+'+place+'&key='+key+''
    });
  }
});
