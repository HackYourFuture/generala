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

.controller('GameCtrl', function($scope) {

  $scope.dice1 = 'views/game/img/dice1.png';
  $scope.dice2 = 'views/game/img/dice2.png';
  $scope.dice3 = 'views/game/img/dice3.png';
  $scope.dice4 = 'views/game/img/dice4.png';
  $scope.dice5 = 'views/game/img/dice5.png';

  $scope.throwDice = function (){
    console.log("hello");
    for (var i = 1; i < 6; i++){
      $scope['dice' + i] = 'views/game/img/dice' + (Math.floor( Math.random() * 6 ) + 1).toString() + '.png';
    }
  }
});
