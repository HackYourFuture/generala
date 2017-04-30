'use strict';

angular.module('generalaApp.game', [
	'ngRoute',
	'generalaApp.game.game-layout-directive',
	'generalaApp.player.player-directive',
	'generalaApp.player.player-scoring-directive'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game', {
    templateUrl: 'views/game/game.html',
    controller: 'GameCtrl'
  });
}])

.controller('GameCtrl', [function() {


}]);
