$( document ).ready(function(){
     $(".button-collapse").sideNav();
});


var straight;
var fullHouse;
var FourOfaKind;
var generalas;
var doubleGenerals;



window.addEventListener( 'DOMContentLoaded', function () {
	
		var buttonRoolDice = document.getElementById( 'btn-roll' );

    function rollDice () {

        var diceSide1 = document.getElementById( 'dice-side-1' );
        var diceSide2 = document.getElementById( 'dice-side-2' );
        var diceSide3 = document.getElementById( 'dice-side-3' );
        var diceSide4 = document.getElementById( 'dice-side-4' );
        var diceSide5 = document.getElementById( 'dice-side-5' );
        var status = document.getElementById( 'status' );

        var side1 = Math.floor( Math.random() * 6 ) + 1;
        var side2 = Math.floor( Math.random() * 6 ) + 1;
        var side3 = Math.floor( Math.random() * 6 ) + 1;
        var side4 = Math.floor( Math.random() * 6 ) + 1;
        var side5 = Math.floor( Math.random() * 6 ) + 1;
        var diceTotal = side1 + side2 + side3 + side4 + side5;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;
        diceSide3.innerHTML = side3;
        diceSide4.innerHTML = side4;
        diceSide5.innerHTML = side5;

        status.innerHTML = 'You rolled ' + diceTotal + '.';
        var onesPoint = document.getElementById('ones-point');
        onesPoint.innerHTML = diceTotal;

        if ( side1 === side2 === side3 === side4 === side5 ) {
            status.innerHTML += ' Generalas! You get a free turn!';
        } else if (side1 === side2 === side3 ===side4) {
            status.innerHTML += ' You have got Four of a kind!';
        } else if (side1 === side2 === side3) {
            status.innerHTML += 'You have got Full House!';
        }
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);

