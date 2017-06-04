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

.factory('throwOneDice', function () {
  return  () => (Math.floor( Math.random() * 6 ) + 1);
})


.factory('throwMultipleDices', function (throwOneDice) {
  return  (n) => {
    let result = [];
    for (var i = 0; i < n; i++){
      result.push(throwOneDice());
    }
    return result;
  };
})

.controller('GameCtrl', function($scope, throwMultipleDices) {
$scope.player1 = {
  score: 0,
  name: "player1"
};
$scope.player2 = {
  score: 0,
  name: "player2"
};
  // $scope.dice1 = 'views/game/img/dice1.png';
  // $scope.dice2 = 'views/game/img/dice2.png';
  // $scope.dice3 = 'views/game/img/dice3.png';
  // $scope.dice4 = 'views/game/img/dice4.png';
  // $scope.dice5 = 'views/game/img/dice5.png';

  // $scope.throwDice = function (){
  //   let dices = throwMultipleDices(5);
  //   let i = 1;
  //   for (var d of dices){
  //     $scope['dice' + i++] = 'views/game/img/dice' +d.toString() + '.png';
  //   }
  // }
});
