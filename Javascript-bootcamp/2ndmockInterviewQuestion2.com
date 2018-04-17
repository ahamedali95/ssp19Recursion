/*------------------------------------------------------------------------------
// bestScoresSum
//
// Write a function `bestScoresSum(arr)` that takes an array of objects as an argument.
// See the `people` arrays for an example of how the input data will look. The function
// should return the person's initials whose scores sum to the highest number.
// You can assume that there is at least one person in the input array.
//
// Examples:
//
// var people1 = [
//   { name: "April Ludgate", scores : [1,2,3,4] },
//   { name: "Andy Dwyer", scores : [10,3,2] },
//   { name: "Leslie Knope", scores : [5,7,9] },
//   { name: "Ben Wyatt", scores : [4,4,4,4] }
// ];
//
// var people2 = [
//   { name: "Ron Swanson", scores : [10] },
//   { name: "Anne Perkins", scores : [4] }
// ];
//
// bestScoresSum(people1); // =>'LK'
// bestScoresSum(people2); // => 'RS'
------------------------------------------------------------------------------*/