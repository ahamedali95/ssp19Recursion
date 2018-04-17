// Write a function `myForEach(arr, cb)` that accepts an array and a callback.
// It should call the `cb` for every element of the array, passing the element, its
// corresponding index, and the array itself to the callback. Do not use the built-in
// `Array.prototype.forEach` method. The return value is irrelevant.
//
// Examples:
//
// function printInfo(ele, i, arr) {
//   console.log(ele, "is at position", i, "in array", arr);
// }
//
// myForEach(['a', 'b', 'c'], printInfo); // prints
// a is at position 0 in array [ 'a', 'b', 'c' ]
// b is at position 1 in array [ 'a', 'b', 'c' ]
// c is at position 2 in array [ 'a', 'b', 'c' ]
//
//
// function printHalf(num) {
//   console.log(num / 2);
// }
//
// myForEach(['10', '50', '120'], printHalf); // prints
// 5
// 25
// 60



function myForEach(arr, cb)
{
	for(var i = 0; i <= arr.length - 1; i++)
	{
		var index = i;
		var element = arr[i];
		cb(element, index, arr);
	}
}

function printInfo(ele, i, arr) 
{
  console.log(ele, "is at position", i, "in array", arr);
}

 function printHalf(num) 
 {
  console.log(num / 2);
 }

myForEach(["a", "b", "c"], printInfo);
myForEach(['10', '50', '120'], printHalf);








