'use strict';

angular.module('generalaApp.player.player-scoring-directive', [])

.directive('playerScoring', [function(version) {
	return {
	restrict: 'E',       
	templateUrl: '/components/player/player-scoring-directive.html',
	//controller: controllerFunction, //Embed a custom controller in the directive
	link: function ($scope, element, attrs) {
		console.log("player scoring");
	} //DOM manipulation
}
}]);
