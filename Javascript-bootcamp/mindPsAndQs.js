// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The
// function should return the length of the longest consecutive streak of the letters
// 'P' and 'Q'.
//
// Examples:
//
// mindPsAndQs('BOOTCAMP'); // => 1
// mindPsAndQs('APCDQQPPC'); // => 4
// mindPsAndQs('PQPQ'); // => 4
// mindPsAndQs('PPPXQPPPQ'); // => 5


function mindPsAndQs(str) {
	var currentStreak = 0;
	var longestStreak = 0;

	for (var i = 0; i < str.length; i++) {
		var char = str[i];

		if (char === "P" || char === "Q") {
			currentStreak += 1;
		}
		else if (currentStreak > longestStreak) {
			longestStreak = currentStreak;
			currentStreak = 0;
		}
		else {
			currentStreak = 0;
		}

		if (i === str.length - 1 && currentStreak > longestStreak) {
			longestStreak = currentStreak;
		}

	}

	return longestStreak;
}

console.log(mindPsAndQs('BOOTCAMP')); // => 1
console.log(mindPsAndQs('APCDQQPPC')); // => 4)
console.log(mindPsAndQs('PQPQ')); // => 4
console.log(mindPsAndQs('PPPXQPPPQ')); // => 5