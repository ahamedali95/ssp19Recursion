// An isogram is a word with only unique, non-repeating letters.
// Given two isograms of the same length, return an array with two numbers
// indicating matches: the first number is the number of letters matched in both
// words at the same position, and the second is the number of letters matched in
// both words but not in the same position.
//
// Examples:
//
// isogramMatcher("an", "at"); //=> [1, 0]
// isogramMatcher("or", "go"); //=> [0, 1]
// isogramMatcher("cat", "tap"); //=> [1, 1]
// isogramMatcher("home", "dome"); //=> [3, 0]
// isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
// isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]

function isogramMatcher(iso1, iso2) {
	var sameLocation = 0;
	var differentLocation = 0;

	for (var i = 0; i < iso1.length; i++) {
		var char1 = iso1[i];
		var char2 = iso2[i];

		if (char1 === char2) {
			sameLocation += 1;
		} else {
			var count = findDifferentLocation(char1, iso2);
			differentLocation += count;
		}
	}

	return [sameLocation, differentLocation];
}

function findDifferentLocation(letter, isogram) {
	var count = 0;

	for (var i = 0; i < isogram.length; i++) {
		var char = isogram[i];

		if (letter === char) {
			count += 1;
		}
	}

	return count;
}
console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
console.log(isogramMatcher("home", "dome")); //=> [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]