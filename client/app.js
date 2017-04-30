		'use strict';

		// Declare app level module which depends on views, and components
		angular.module('generalaApp', [
		  'ngRoute',
		   'ngMaterial',
		  'generalaApp.welcome',
		  'generalaApp.game',
		  /*'generalaApp.version'*/
		]).
		config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		  $locationProvider.hashPrefix('!');

		  $routeProvider.otherwise({redirectTo: '/welcome'});
		}]);
s