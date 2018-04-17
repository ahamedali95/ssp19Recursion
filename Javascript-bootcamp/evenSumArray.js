/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenSumArray(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    var num = array[i];

    for(var j = 1; j <= num; j++) {

      if(isEven(j)){
        total += j;
      }
    }

    array.splice(i, 1, total);
    total = 0;
  }

  return array;
}

function isEven(num) {
  return num % 2 === 0;
}


console.log(evenSumArray([6, 7, 5]));// => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5]));// => [ 2, 20, 2, 6 ])