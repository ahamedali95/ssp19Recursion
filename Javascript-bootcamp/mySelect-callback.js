// Write a function `mySelect(arr, cb)` that accepts an array and a callback. It should
// pass each element, its corresponding index, and the array itself to the callback. It
// should return a new array of all the elements in the input array `arr` where the
// callback `cb` returns true.
//
// Examples:
//
// function isEven(num) {
//   return num % 2 === 0;
// }
//
// mySelect([1,2,3,4,5,6], isEven); // => [ 2, 4, 6 ]
//
//
// function isNegative(num) {
//   return num < 0;
// }
//
// mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]


function mySelect(arr, cb)
{
	var newArr = [];

	for(var i = 0; i <= arr.length - 1; i++)
	{
		var index = i;
		var element = arr[index];
		var isTrue = cb(element, index, arr);
		if(isTrue)
		{
			newArr.push(element);
		}
	}
	return newArr;
}

 function isEven(num) {
   return num % 2 === 0;
 }

  function isNegative(num) {
   return num < 0;
 }


//
 console.log(mySelect([1,2,3,4,5,6], isEven)); // => [ 2, 4, 6 ]
 console.log(mySelect([12, -14, 4, -10.2, 0], isNegative)); // => [ -14, -10.2 ]