'use strict';

angular.module('generalaApp.game.game-layout-directive', [])

.directive('gameLayout', [function(version) {
	return {
	restrict: 'E',       
	scope: {
		name: '@'
	},
	templateUrl: '/components/game/game-layout-directive.html',
	//controller: controllerFunction, //Embed a custom controller in the directive
	link: function ($scope, element, attrs) {
		console.log("game-layout", attrs.name);
	} //DOM manipulation
}
}]);
