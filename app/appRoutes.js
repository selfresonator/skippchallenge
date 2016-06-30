angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'js/search/search.html',
          controller: 'SearchCtrl'
      });
  }
]);
