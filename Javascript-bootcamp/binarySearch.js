/*Binary search is a technique for very rapidly searching a sorted collection by 
cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.
*/

function binarySearch(arr, value) { 
  var start = 0; 
  var end = arr.length - 1; 

  while(start <= end) {
  	var midPoint = (start + end) / 2; 
  	var midPointVal = arr[midPoint]; 

  	if (midPointVal === value) { 
  		return midPoint;
  	} else if (value < midPointVal) { 
  		end = midPoint - 1;
  	} else {
  		start = midPoint + 1;
  	}
  }

  return -1;
}

console.log(binarySearch([1, 3, 16, 22, 31, 33, 34], 3));