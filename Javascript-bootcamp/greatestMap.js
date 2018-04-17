// Write a function `greatestMap(ary, cb1, cb2)` which takes as an
// argument an array of numbers and two callbacks. It creates a new array
// with each element from ary "mapped" to a new element using whichever
// callback returns a larger mapped value. Both callbacks take as
// arguments the element, index, and array.
//
// Example 1:
//
// var ary1 = [1, 5, 10];
//
// function squareRootRounder(num) {
//   return Math.round(Math.sqrt(num));
// }
//
// function half(num) {
//   return num / 2;
// }
//
// greatestMap(ary1, squareRootRounder, half); //=> [ 1, 2.5, 5 ]
//
// Hint:
//
// squareRootRounder(1); //=> 1
// squareRootRounder(5); //=> 2
// squareRootRounder(10); //=> 3



function greatestMap(arr, cb1, cb2) {
	var mappedLargest = [];

	for (var idx = 0; idx < arr.length; idx++) {
		var element = arr[idx];
		var resultFromCb1 = cb1(element, idx, arr);
		var resultFromCb2 = cb2(element, idx, arr);

		if (resultFromCb1 > resultFromCb2) {
			mappedLargest.push(resultFromCb1);
		} else {
			mappedLargest.push(resultFromCb2);
		}
	}

	return mappedLargest;
}


//
 var ary1 = [1, 5, 10];
//
function squareRootRounder(num) {
   return Math.round(Math.sqrt(num));
}
//
 function half(num) {
   return num / 2;
 }
//
console.log(greatestMap(ary1, squareRootRounder, half)); //=> [ 1, 2.5, 5 ]