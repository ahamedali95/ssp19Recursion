function assertEqual2(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected) {
        console.log("Passed");
    } else {
        console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
    }
}


//Write a function called average that takes an array of 
//numbers as a parameter and returns the average of those numbers.
//After you write your function, you can test it using the above 
//inputs to make sure that it behaves correctly.

function average(nums) {
  var sum = nums.reduce(function(accumulator, currentNum) {
  	return accumulator + currentNum;
  });

  return sum / nums.length;
}

//average([50, 25, 75, 10]); //40
//average([4, 12]); //8
//average([19, 23, 41, 99, 13]) //39

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log("PASSED");
	} else {
		console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
	}
}

var result = average([50,25,75,10]);
assertEqual(result, 40, "It takes the average of given arrays");

//Write a function called min that finds the smallest number in an 
//array of numbers.
//After you write your function, you can test it using the above 
//inputs to make sure that it behaves correctly.

function min(arr) {
	return arr.reduce(function(accumulator, currentNum) {
		if (currentNum < accumulator) {
			return accumulator = currentNum;
		}

		return accumulator;
	}, arr[0]);
}

var minResult = min([1, 20, 44, 64, 28]);
assertEqual(minResult, 1, "It finds the mininum value in the array");

//Write a function shortestWord which returns the first shortest 
//word from the input string.
//After you write your function, you can test it using the above 
//inputs to make sure that it behaves correctly.

function shortestWord(str) {
	return str.split(" ").reduce(function(accumulator, currentWord) {
		if (currentWord.length < accumulator.length) {
			accumulator = currentWord;
		}

		return accumulator;
	}, str.split(" ")[0]);
}

var shortestWordResult = shortestWord('one string to rule them all');
assertEqual(shortestWordResult, "to", "It find the shortest word from the given string");

//Write a function countCharacters that, when given a string as an argument, returns an object 
//containing counts of the occurrences of each character in the string.
//After you write your function, you can test it using the above inputs to make sure that it 
//behaves correctly.


function countCharacter(str) {
	var obj = {};
	var chars = str.split("");

	chars.forEach(function(char) {
		if (obj[char] === undefined) {
			obj[char] = 1;
		} else {
			obj[char]++;
		}
	});

	return obj;
}

//console.log(countCharacter("ahamed"));

var countCharacterResult = countCharacter("ahamed");
var expected = { a: 2, h: 1, m: 1, e: 1, d: 1 };
assertEqual2(countCharacterResult, expected, "Given a string, it returns an object which represent the occurence of each character");

//var r = countCharacter("ahamed");
//console.log(r);
//console.log(JSON.stringify(r));

//Write a function select that accepts two arguments: an object and an array. 
//The array should contain names of keys that will be selected from the object.

function select(obj, arr) {
	var newObj = {};

	arr.forEach(function(ele) {
		for (var key in obj) {
			if (ele === key) {
				newObj[key] = obj[key];
			}
		}
	});

	return newObj;
}

//console.log(select({a: 1, b: 2, c: 3}, ["a", "c"]));
var selectResult = select({a: 1, b: 2, c: 3}, ["a", "c"]);
var expected = {a: 1, c: 3};
assertEqual2(selectResult, expected, "Given an object and array, it returns an object containing all the keys selected from the object");

//Write a function called squareNumericValues that takes an object as a parameter 
//and returns an object with all of the numeric values in the object squared.

function squareNumbericValues(obj) {
	var newObj = {};

	for (var key in obj) {
		if (typeof obj[key] === "number") {
			newObj[key] = obj[key] * obj[key];
		} else {
			newObj[key] = obj[key];
		}
	}

	return newObj;
}

//console.log(squareNumbericValues({name: "Phuong", age: 25}));
var squareNumbericValuesResult = squareNumbericValues({name: "Phuong", age: 25});
assertEqual2(squareNumbericValuesResult, {name: "Phuong", age: 625}, "Given an object, it returns all the numerical values squared")
