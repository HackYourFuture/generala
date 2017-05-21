'use strict';

angular.module('generalaApp.game')


.directive('throwDice', function() {
  return {
  restrict: 'E',
  scope: {
     player: '&'
   },
  templateUrl: '/components/player/player-dice-directive.html',
  controller : function($scope, throwMultipleDices) {

  $scope.player.dice1 = 'views/game/img/dice1.png';
  $scope.player.dice2 = 'views/game/img/dice2.png';
  $scope.player.dice3 = 'views/game/img/dice3.png';
  $scope.player.dice4 = 'views/game/img/dice4.png';
  $scope.player.dice5 = 'views/game/img/dice5.png';

  $scope.counter = 0;

  function doThrowDice () {
     let dices = throwMultipleDices(5);
    let i = 1;
    for (var d of dices){
      $scope.player['dice' + i++] = 'views/game/img/dice' +d.toString() + '.png';
    }
  }

  $scope.throwDice = function (){
   if($scope.counter < 3){
    doThrowDice();
    $scope.counter++;
   }else{
    alert("only 3 times allowed");
   }
  }
}
}
});

