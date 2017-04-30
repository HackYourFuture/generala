'use strict';

angular.module('generalaApp.welcome', ['ngRoute','ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'views/welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
}])

.controller('WelcomeCtrl', function($scope) {
$scope.imagePath = 'views/welcome/pic/generala.jpg';
});


