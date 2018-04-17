function sum(numbers) {
  return numbers.reduce(function(accumulator, currentNum) {
  	return accumulator + currentNum;
  }, 0);
}

function average(numbers) {
  var s = sum(numbers);

  return s / numbers.length;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		//console.log("Passed");
	}
  // this can be any of the assertion functions from this module:
  // assertEqual, assertArraysEqual, assertObjectsEqual, or assertWithinRange
  // feel free to write and use multiple assertion functions if necessary
}

var expectedAverage = average([1, 2, 3, 4, 5]);
var actualAverage = 3;

assertEqual(actualAverage, expectedAverage, 'should calculate the average of an array of numbers');

function assertEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected) {
        console.log("Passed");
    } else {
        console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
    }
}

console.log(JSON.stringify(["Joeb"]));