/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

function nextPrimeArray(array) {
  var newArray = [];

  if (array.length === 0) {
    return newArray;
  }

  for (var i = 0; i < array.length; i++) {
    var num = array[i];

    if (isPrime(num)) {
      newArray.push(nextPrime(num));
    } else {
      newArray.push(num);
    }
  }

  return newArray;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function nextPrime(num) {
  for (var i = num + 1; true; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}

console.log(nextPrimeArray([9, 13, 5, 6]))// => [ 9, 17, 7, 6 ]);