'use strict';

angular.module('generalaApp.player.player-directive', [])

.directive('player', [function(version) {
	return {
	restrict: 'E',       
	scope: {
		name: '@'
	},
	templateUrl: '/components/player/player-directive.html',
	//controller: controllerFunction, //Embed a custom controller in the directive
	link: function ($scope, element, attrs) {
		console.log("player", attrs.name);
	} //DOM manipulation
}
}]);
