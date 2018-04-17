// Write a function `toFeet(distances)` that takes in an array of distance strings.
// The given distances will either be in `feet` or `yards`.
// The function should return a new array where all the distances are converted
// to feet. There are 3 feet in 1 yard.
//
// Examples:
//
// var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
// toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
//
// var arr2 = ['2 yards', '3 feet', '10 yards'];
// toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]

function toFeet(distance) {
	var feet = [];

	for (var i = 0; i < distance.length; i++) {
		var measurement = distance[i];

		if (measurement[measurement.length-1] === "t") {
			feet.push(measurement);
		} else {
			var yard = getYards(measurement);
			var f = yard * 3;
			feet.push(f + " feet");
		}
	}

	return feet;
}

function getYards(y) {
	var yards = " yards".split("");
	var yard = "";

	for (var i = 0; i < y.length; i++) {
		var char = y[i];

		if (yards.indexOf(char) === -1) {
			yard += char;
		}
	}

	return parseInt(yard);
}

var arr2 = ['2 yards', '3 feet', '10 yards'];
console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]