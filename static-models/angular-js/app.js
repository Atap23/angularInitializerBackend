(function() {
  'use strict';

// Declare app level module which depends on views, and components
  angular.module('angularInitializer', [
    'ngRoute',
    'angularInitializer.view1',
    'angularInitializer.view2',
    'angularInitializer.version'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
})();