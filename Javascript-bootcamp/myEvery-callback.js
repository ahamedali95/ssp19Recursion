// Write a function `myEvery(arr, cb)` that takes in an array and a callback.
// The function should call the cb for every element of the array.
// The function should return true only if the callback returns true when passed in every 
// element of the array. The function should return false otherwise.
//
// Examples:
//
// function isEven(num) {
//   return num % 2 === 0;
// }
//
// myEvery([10, 4, 8, 20], isEven); // => true
// myEvery([2, 2, 10, 11, 12], isEven); // => false


function myEvery(arr, cb)
{
	for(var i = 0; i <= arr.length - 1; i++)
	{
		var result = cb(arr[i]);
		if(result === false)
		{
			return false;
		}
	}
	return true;
}

 function isEven(num) {
   return num % 2 === 0;
 }
//
console.log(myEvery([10, 4, 8, 20], isEven)); // => true
console.log(myEvery([2, 2, 10, 11, 12], isEven)); // => false
console.log(myEvery([2, 2, 100, 131, 132, 4, 2, 1, 100, 7, 9], isEven)); // => false