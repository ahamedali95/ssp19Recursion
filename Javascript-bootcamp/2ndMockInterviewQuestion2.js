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
//name = ""
//highest = 0
//iterate through the array
//store each object in a variable
//store student's score in a variable
//iterate throught the score array and find the sum
//if the currentsum is greater than the highest. if so, replace highest with the currentsum and replace name with the studentname
//split the name by a space and get the initials


function bestScoresSum(arr) {
	var highestScore = 0;
	var name = "";

	for (var i = 0; i < arr.length; i++) {
		var student = arr[i];
		var studentName = student.name;
		var studentScore = getSum(student.scores);

		if (studentScore > highestScore) {
			highestScore = studentScore;
			name = studentName;
		}
	}
	
	return name;

	
}

function getSum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}


var people1 = [
   { name: "April Ludgate", scores : [1,2,3,4] },
   { name: "Andy Dwyer", scores : [10,3,2] },
   { name: "Leslie Knope", scores : [5,7,9] },
   { name: "Ben Wyatt", scores : [4,4,4,4] }
 ];
  var people2 = [
   { name: "Ron Swanson", scores : [10] },
   { name: "Anne Perkins", scores : [4] }
 ];


console.log(bestScoresSum(people1)); // =>'LK'
console.log(bestScoresSum(people2)); // => 'RS'