// Write a function winningHand(hand1, hand2) that takes in
// two strings representing a hand of 4 cards. Return
// the string of the hand with the higher total score. If there
// is a tie, return 'DRAW'. Possible cards are J, Q, K.
//
// J = 1 point
// Q = 2 points
// K = 3 points
//
// Examples:
//      
// winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
// winningHand('KJKJ', 'QQQK'); // => 'QQQK'
// winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
// winningHand('KJKJ', 'QQQQ'); // => 'DRAW'


var points = {
		J : 1,
		Q : 2,
		K : 3
	};

function winningHand(hand1, hand2) {
	var totalForHand1 = getTotal(hand1);
	var totalForHand2 = getTotal(hand2);

	if (totalForHand1 > totalForHand2) {
		return hand1;
	} else if (totalForHand2 > totalForHand1) {
		return hand2;
	} else {
		return "DRAW"
	}
}

function getTotal(hand) {
	var total = 0;

	for (var i = 0; i < hand.length; i++) {
		var card = hand[i];
		total += points[card];
	}

	return total;
}

console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ'
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW')